const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: [true, "Company reference is required"],
    },
    type: {
      type: String,
      enum: ["Insight", "Announcement", "Story", "News"],
      required: [true, "Post type is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    image: {
      url: {
        type: String,
        default: "",
      },
      publicId: {
        type: String,
        default: "",
      },
      format: {
        type: String,
        enum: ["landscape", "portrait", "square"],
        default: "landscape",
      },
      aspectRatio: {
        type: String,
        enum: ["16:9", "4:5", "1:1"],
        default: "16:9",
      },
    },
    imageDescription: {
      type: String,
      default: "",
    },
    hashtags: [
      {
        type: String,
        trim: true,
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    shares: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
  },
  {
    timestamps: true,
  }
);

postSchema.index({ company: 1 });
postSchema.index({ type: 1 });
postSchema.index({ status: 1 });
postSchema.index({ createdAt: -1 });

module.exports = mongoose.model("Post", postSchema);
