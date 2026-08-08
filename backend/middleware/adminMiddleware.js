const jwt=require("jsonwebtoken");
const Admin=require("../models/Admin");

const protectAdmin=async(req,res,next)=>{
try{
let token;
if(req.headers.authorization&&req.headers.authorization.startsWith("Bearer")){
token=req.headers.authorization.split(" ")[1];
}
if(!token){
return res.status(401).json({
success:false,
message:"Not authorized"
});
}
const decoded=jwt.verify(token,process.env.JWT_SECRET);
const admin=await Admin.findById(decoded.id).select("-password");
if(!admin){
return res.status(401).json({
success:false,
message:"Admin not found"
});
}
req.user=admin;
next();
}catch(err){
console.log(err);
return res.status(401).json({
success:false,
message:"Invalid Token"
});
}
};

module.exports={protectAdmin};