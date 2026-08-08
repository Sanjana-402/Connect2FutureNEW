const express = require("express");
const router = express.Router();
const {
  getInsights,
  getInsightById,
  createInsight,
  updateInsight,
  deleteInsight,
} = require("../controllers/insightController");
const { protectAdmin } = require("../middleware/adminMiddleware");
const upload = require("../middleware/upload");

router.get("/", getInsights);
router.get("/:id", getInsightById);
router.post("/", protectAdmin, upload.single("image"), createInsight);
router.put("/:id", protectAdmin, upload.single("image"), updateInsight);
router.delete("/:id", protectAdmin, deleteInsight);

module.exports = router;
