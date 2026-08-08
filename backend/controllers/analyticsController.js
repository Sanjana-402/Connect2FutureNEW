const Contact=require("../models/Contact");
const dayjs=require("dayjs");

const getAnalytics=async(req,res)=>{
try{

const total=await Contact.countDocuments();

const read=await Contact.countDocuments({status:"Read"});
const unread=await Contact.countDocuments({status:"New"});

const services=await Contact.aggregate([
{$group:{_id:"$service",count:{$sum:1}}},
{$sort:{count:-1}}
]);

const subServices=await Contact.aggregate([
{$group:{_id:"$subService",count:{$sum:1}}},
{$sort:{count:-1}}
]);

const monthly=await Contact.aggregate([
{
$group:{
_id:{
year:{$year:"$createdAt"},
month:{$month:"$createdAt"}
},
count:{$sum:1}
}
},
{$sort:{"_id.year":1,"_id.month":1}}
]);

const daily=await Contact.aggregate([
{
$group:{
_id:{
$dateToString:{
format:"%d %b",
date:"$createdAt"
}
},
count:{$sum:1}
}
},
{$sort:{_id:1}}
]);

res.json({
success:true,
cards:{
total,
read,
unread
},
services,
subServices,
monthly,
daily
});

}catch(err){
console.log(err);
res.status(500).json({
success:false,
message:"Server Error"
});
}
};

module.exports={
getAnalytics
};