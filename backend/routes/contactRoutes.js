const express=require("express");
const router=express.Router();
const{
submitContact,
getAllContacts,
getContactById,
markAsRead,
deleteContact,
getDashboardStats
}=require("../controllers/contactController");
router.post("/submit",submitContact);
router.get("/dashboard",getDashboardStats);
router.get("/",getAllContacts);
router.get("/:id",getContactById);
router.put("/:id/read",markAsRead);
router.delete("/:id",deleteContact);
module.exports=router;