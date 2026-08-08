const PDFDocument=require("pdfkit");
const ExcelJS=require("exceljs");
const {Parser}=require("json2csv");
const Contact=require("../models/Contact");

const exportPDF=async(req,res)=>{
try{
const contacts=await Contact.find().sort({createdAt:-1});
const doc=new PDFDocument({margin:40,size:"A4"});
res.setHeader("Content-Type","application/pdf");
res.setHeader("Content-Disposition","attachment; filename=BusinessReport.pdf");
doc.pipe(res);
doc.fontSize(22).fillColor("#ff1ea8").text("CONNECT2FUTURE",{align:"center"});
doc.moveDown();
doc.fontSize(18).fillColor("black").text("Business Report");
doc.moveDown();
doc.fontSize(12);
doc.text(`Generated : ${new Date().toLocaleString()}`);
doc.text(`Total Enquiries : ${contacts.length}`);
doc.moveDown();
contacts.forEach((c,i)=>{
doc.fontSize(13).fillColor("#ff1ea8").text(`${i+1}. ${c.fullName}`);
doc.fillColor("black");
doc.text(`Email : ${c.email}`);
doc.text(`Phone : ${c.countryCode} ${c.phone}`);
doc.text(`Service : ${c.service}`);
doc.text(`Sub Service : ${c.subService}`);
doc.text(`Status : ${c.status}`);
doc.text(`Date : ${new Date(c.createdAt).toLocaleString()}`);
doc.text(`Message : ${c.message}`);
doc.moveDown();
});
doc.end();
}catch(err){
console.log(err);
res.status(500).json({success:false,message:"Server Error"});
}
};

const exportExcel=async(req,res)=>{
try{
const workbook=new ExcelJS.Workbook();
const sheet=workbook.addWorksheet("Business Report");
sheet.columns=[
{header:"Name",key:"fullName",width:25},
{header:"Email",key:"email",width:30},
{header:"Country Code",key:"countryCode",width:15},
{header:"Phone",key:"phone",width:18},
{header:"Service",key:"service",width:25},
{header:"Sub Service",key:"subService",width:25},
{header:"Message",key:"message",width:40},
{header:"Status",key:"status",width:15},
{header:"Date",key:"createdAt",width:25}
];
const contacts=await Contact.find().sort({createdAt:-1});
contacts.forEach(c=>sheet.addRow(c.toObject()));
res.setHeader("Content-Type","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
res.setHeader("Content-Disposition","attachment; filename=BusinessReport.xlsx");
await workbook.xlsx.write(res);
res.end();
}catch(err){
console.log(err);
res.status(500).json({success:false,message:"Server Error"});
}
};

const exportCSV=async(req,res)=>{
try{
const contacts=await Contact.find().sort({createdAt:-1});
const parser=new Parser({
fields:["fullName","email","countryCode","phone","service","subService","message","status","createdAt"]
});
const csv=parser.parse(contacts);
res.header("Content-Type","text/csv");
res.attachment("BusinessReport.csv");
res.send(csv);
}catch(err){
console.log(err);
res.status(500).json({success:false,message:"Server Error"});
}
};

module.exports={
exportPDF,
exportExcel,
exportCSV
};