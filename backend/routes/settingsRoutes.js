const express=require("express");
const router=express.Router();

const{protectAdmin}=require("../middleware/adminMiddleware");
const{updatePassword}=require("../controllers/settingsController");

router.put("/password",protectAdmin,updatePassword);

module.exports=router;