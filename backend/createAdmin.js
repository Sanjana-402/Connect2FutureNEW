require("dotenv").config();

const mongoose=require("mongoose");
const Admin=require("./models/Admin");

mongoose.connect(process.env.MONGO_URI)
.then(async()=>{

const existingAdmin=await Admin.findOne({
email:"admin@connect2future.com"
});

if(existingAdmin){
console.log("⚠️ Admin already exists.");
process.exit();
}

await Admin.create({
name:"Super Admin",
email:"admin@connect2future.com",
password:"Admin@123"
});

console.log("✅ Admin created successfully.");

process.exit();

})
.catch((err)=>{
console.log(err);
process.exit();
});