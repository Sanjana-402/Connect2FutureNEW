const bcrypt=require("bcryptjs");
const Admin=require("../models/Admin");

const updatePassword=async(req,res)=>{
try{
const{currentPassword,newPassword}=req.body;

const admin=await Admin.findById(req.user.id);

if(!admin){
return res.status(404).json({success:false,message:"Admin not found"});
}

const match=await admin.comparePassword(currentPassword);

if(!match){
return res.status(400).json({
success:false,
message:"Current password is incorrect"
});
}

admin.password=newPassword;

await admin.save();

res.json({
success:true,
message:"Password updated successfully"
});

}catch(err){
console.log(err);
res.status(500).json({
success:false,
message:"Server Error"
});
}
};

module.exports={updatePassword};