const Post = require("../models/Post");
const Company = require("../models/Company");
const { uploadToCloudinary, deleteFromCloudinary } = require("../utils/cloudinaryUpload");

// @desc    Get all published insights with filtering & pagination
// @route   GET /api/insights
// @access  Public
const getInsights = async (req, res) => {
  try {
    const { company, type, page = 1, limit = 6, status = "published" } = req.query;

    const query = {};
    if (status && status !== "all") {
      query.status = status;
    }

    // Filter by company name or ID
    if (company && company !== "All") {
      let companyDoc;
      if (company.match(/^[0-9a-fA-F]{24}$/)) {
        companyDoc = await Company.findById(company);
      } else {
        companyDoc = await Company.findOne({ name: company });
      }

      if (companyDoc) {
        query.company = companyDoc._id;
      } else {
        const pageNum = parseInt(page) || 1;
        const limitNum = parseInt(limit) || 6;
        return res.status(200).json({
          success: true,
          data: [],
          pagination: {
            page: pageNum,
            limit: limitNum,
            total: 0,
            totalPages: 0,
            hasNextPage: false,
            hasPreviousPage: false,
          },
        });
      }
    }

    // Filter by type
    if (type && type !== "All") {
      query.type = type;
    }

    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 6;
    const skip = (pageNum - 1) * limitNum;

    const total = await Post.countDocuments(query);
    const totalPages = Math.ceil(total / limitNum) || 0;

    const insights = await Post.find(query)
      .populate("company", "name logo tagline verified description")
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);

    res.status(200).json({
      success: true,
      data: insights,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages,
        hasNextPage: pageNum < totalPages,
        hasPreviousPage: pageNum > 1,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// @desc    Get single insight
// @route   GET /api/insights/:id
// @access  Public
const getInsightById = async (req, res) => {
  try {
    const insight = await Post.findById(req.params.id)
      .populate("company", "name logo tagline verified description")
      .populate("createdBy", "name email");

    if (!insight) {
      return res.status(404).json({
        success: false,
        message: "Insight not found",
      });
    }

    res.status(200).json({
      success: true,
      data: insight,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// @desc    Create insight
// @route   POST /api/insights
// @access  Private/Admin
const createInsight = async (req, res) => {
  try {
    const { company, type, title, content, imageDescription, hashtags, format, aspectRatio } = req.body;

    if (!company) {
      return res.status(400).json({
        success: false,
        message: "Company is required",
      });
    }

    // Validate company exists
    const companyDoc = await Company.findById(company);
    if (!companyDoc) {
      return res.status(400).json({
        success: false,
        message: "Invalid company ID",
      });
    }

    if (!type || !title || !content) {
      return res.status(400).json({
        success: false,
        message: "Type, title, and content are required",
      });
    }

    let image = {
      url: "",
      publicId: "",
      format: format || "landscape",
      aspectRatio: aspectRatio || "16:9",
    };

    // Upload image to Cloudinary via Multer memory storage
    if (req.file) {
      const folder = type === "Announcement"
        ? "connect2future/announcements"
        : "connect2future/insights";
      const uploaded = await uploadToCloudinary(req.file.buffer, folder);
      image.url = uploaded.url;
      image.publicId = uploaded.publicId;
    }

    // Parse hashtags
    let parsedHashtags = [];
    if (hashtags) {
      if (typeof hashtags === "string") {
        parsedHashtags = hashtags.split(",").map((tag) => {
          const trimmed = tag.trim();
          return trimmed.startsWith("#") ? trimmed : `#${trimmed}`;
        }).filter(Boolean);
      } else if (Array.isArray(hashtags)) {
        parsedHashtags = hashtags;
      }
    }

    const post = await Post.create({
      company,
      type,
      title,
      content,
      image,
      imageDescription: imageDescription || title,
      hashtags: parsedHashtags,
      createdBy: req.user ? req.user._id : undefined,
      status: "published",
    });

    const populatedPost = await Post.findById(post._id)
      .populate("company", "name logo tagline verified description")
      .populate("createdBy", "name email");

    res.status(201).json({
      success: true,
      data: populatedPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// @desc    Update insight
// @route   PUT /api/insights/:id
// @access  Private/Admin
const updateInsight = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Insight not found",
      });
    }

    const { company, type, title, content, imageDescription, hashtags, status, format, aspectRatio } = req.body;

    if (company) post.company = company;
    if (type) post.type = type;
    if (title) post.title = title;
    if (content) post.content = content;
    if (imageDescription) post.imageDescription = imageDescription;
    if (status) post.status = status;

    if (format) {
      if (!post.image) post.image = {};
      post.image.format = format;
    }
    if (aspectRatio) {
      if (!post.image) post.image = {};
      post.image.aspectRatio = aspectRatio;
    }

    if (hashtags) {
      if (typeof hashtags === "string") {
        post.hashtags = hashtags.split(",").map((tag) => {
          const trimmed = tag.trim();
          return trimmed.startsWith("#") ? trimmed : `#${trimmed}`;
        }).filter(Boolean);
      } else if (Array.isArray(hashtags)) {
        post.hashtags = hashtags;
      }
    }

    if (req.file) {
      if (post.image && post.image.publicId) {
        await deleteFromCloudinary(post.image.publicId);
      }
      const folder = (type || post.type) === "Announcement"
        ? "connect2future/announcements"
        : "connect2future/insights";
      const uploaded = await uploadToCloudinary(req.file.buffer, folder);
      post.image = {
        url: uploaded.url,
        publicId: uploaded.publicId,
        format: format || post.image?.format || "landscape",
        aspectRatio: aspectRatio || post.image?.aspectRatio || "16:9",
      };
    }

    await post.save();

    const populatedPost = await Post.findById(post._id)
      .populate("company", "name logo tagline verified description")
      .populate("createdBy", "name email");

    res.status(200).json({
      success: true,
      data: populatedPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// @desc    Delete insight
// @route   DELETE /api/insights/:id
// @access  Private/Admin
const deleteInsight = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Insight not found",
      });
    }

    if (post.image && post.image.publicId) {
      await deleteFromCloudinary(post.image.publicId);
    }

    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Insight deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  getInsights,
  getInsightById,
  createInsight,
  updateInsight,
  deleteInsight,
};
