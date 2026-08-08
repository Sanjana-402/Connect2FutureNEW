const Company = require("../models/Company");
const { uploadToCloudinary, deleteFromCloudinary } = require("../utils/cloudinaryUpload");

// @desc    Get all companies
// @route   GET /api/companies
// @access  Public
const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find().sort({ name: 1 });
    res.status(200).json({
      success: true,
      count: companies.length,
      data: companies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// @desc    Get single company
// @route   GET /api/companies/:id
// @access  Public
const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }
    res.status(200).json({
      success: true,
      data: company,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// @desc    Create company
// @route   POST /api/companies
// @access  Private/Admin
const createCompany = async (req, res) => {
  try {
    const { name, tagline, description } = req.body;

    const existingCompany = await Company.findOne({ name });
    if (existingCompany) {
      return res.status(400).json({
        success: false,
        message: "Company already exists",
      });
    }

    let logo = { url: "", publicId: "" };

    if (req.file) {
      logo = await uploadToCloudinary(req.file.buffer, "connect2future/companies");
    }

    const company = await Company.create({
      name,
      logo,
      tagline: tagline || "UNLOCK THE POWER OF CONNECTIVITY",
      description,
    });

    res.status(201).json({
      success: true,
      data: company,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

// @desc    Update company
// @route   PUT /api/companies/:id
// @access  Private/Admin
const updateCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    const { name, tagline, description, verified } = req.body;

    if (name) company.name = name;
    if (tagline) company.tagline = tagline;
    if (description) company.description = description;
    if (verified !== undefined) company.verified = verified;

    if (req.file) {
      if (company.logo && company.logo.publicId) {
        await deleteFromCloudinary(company.logo.publicId);
      }
      company.logo = await uploadToCloudinary(req.file.buffer, "connect2future/companies");
    }

    await company.save();

    res.status(200).json({
      success: true,
      data: company,
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
  getCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
};
