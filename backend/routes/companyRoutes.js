const express = require("express");
const router = express.Router();
const {
  getCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
} = require("../controllers/companyController");
const { protectAdmin } = require("../middleware/adminMiddleware");
const upload = require("../middleware/upload");

router.get("/", getCompanies);
router.get("/:id", getCompanyById);
router.post("/", protectAdmin, upload.single("logo"), createCompany);
router.put("/:id", protectAdmin, upload.single("logo"), updateCompany);

module.exports = router;
