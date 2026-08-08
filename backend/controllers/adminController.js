const jwt=require("jsonwebtoken");
const Admin=require("../models/Admin");

const loginAdmin=async(req,res)=>{
try{

const{email,password}=req.body;
console.log("Email:", email);
console.log("Password:", password);

if(!email||!password){
return res.status(400).json({
success:false,
message:"Please provide email and password."
});
}

const admin=await Admin.findOne({email});
console.log("Admin Found:", admin);

if(!admin){
return res.status(401).json({
success:false,
message:"Invalid credentials."
});
}

const isMatch=await admin.comparePassword(password);
console.log("Password Match:",isMatch);


if(!isMatch){
return res.status(401).json({
success:false,
message:"Invalid credentials."
});
}

const token=jwt.sign(
{
id:admin._id
},
process.env.JWT_SECRET,
{
expiresIn:"7d"
}
);

res.status(200).json({
success:true,
token,
admin:{
id:admin._id,
name:admin.name,
email:admin.email
}
});

}
catch(error){

console.error(error);

res.status(500).json({
success:false,
message:"Server Error"
});

}
};

module.exports={
loginAdmin
};