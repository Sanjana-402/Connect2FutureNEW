const express=require("express");
const router=express.Router();

const{
exportPDF,
exportExcel,
exportCSV
}=require("../controllers/reportController");

router.get("/pdf",exportPDF);
router.get("/excel",exportExcel);
router.get("/csv",exportCSV);

module.exports=router;