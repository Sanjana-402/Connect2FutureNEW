const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./config/database");
const adminRoutes=require("./routes/adminRoutes");
const analyticsRoutes=require("./routes/analyticsRoutes");
const settingsRoutes=require("./routes/settingsRoutes");
const reportRoutes=require("./routes/reportRoutes");


dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/contact", contactRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/analytics",analyticsRoutes);
app.use("/api/settings",settingsRoutes);
app.use("/api/report",reportRoutes);



app.get("/", (req, res) => {
  res.send("Connect2Future Backend Running...");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});