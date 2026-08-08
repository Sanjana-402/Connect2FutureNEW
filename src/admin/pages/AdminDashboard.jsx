import {FaEnvelopeOpenText,FaEye,FaUserCheck,FaArrowUp,FaClock,FaUserTie} from "react-icons/fa";
import StatsCards from "../components/StatsCards";
import ContactsTable from "../components/ContactsTable";
import styles from "../styles/AdminDashboard.module.css";
import {useEffect,useState} from "react";
import{useNavigate}from"react-router-dom";
import ContactModal from "../components/ContactModal";
import{
getDashboardStats,
getContact,
deleteEnquiry,
markEnquiryRead,
searchEnquiries
}from"../services/dashboardService";
import{downloadPDF,downloadCSV,downloadExcel}from"../services/reportService";
import toast from"react-hot-toast";




export default function AdminDashboard(){

const navigate=useNavigate();
const[stats,setStats]=useState({
total:0,
unread:0,
read:0,
todayEnquiries:0,
});

const[latest,setLatest]=useState([]);

const[loading,setLoading]=useState(true);
const[selectedContact,setSelectedContact]=useState(null);
const[showModal,setShowModal]=useState(false);
const[search,setSearch]=useState("");

const statsCards=[
{
title:"Total Enquiries",
value:stats.total,
icon:<FaEnvelopeOpenText/>,
color:"#ff1ea8",
},
{
title:"Unread",
value:stats.unread,
icon:<FaEye/>,
color:"#f59e0b",
},
{
title:"Read",
value:stats.read,
icon:<FaUserCheck/>,
color:"#22c55e",
},

];



const fetchDashboard=async()=>{

try{

const data=await getDashboardStats();

setStats(data.stats);

setLatest(data.latest);

}
catch(err){

console.error(err);

}
finally{

setLoading(false);

}

};
useEffect(()=>{

fetchDashboard();

},[]);
if(loading){
return <h2>Loading Dashboard...</h2>;
}

const openContact=async(id)=>{
try{
const data=await getContact(id);
setSelectedContact(data.contact);
setShowModal(true);
}catch(err){
console.error(err);
}
};

const markRead=async(id)=>{
await markEnquiryRead(id);
setShowModal(false);
fetchDashboard();
};

const removeContact=async(id)=>{
if(!window.confirm("Delete this enquiry?")) return;
await deleteEnquiry(id);
setShowModal(false);
fetchDashboard();
};

const searchContact=async(value)=>{
setSearch(value);
const data=await searchEnquiries(value);
setLatest(data.contacts);
};

const saveFile=(blob,fileName)=>{
const url=window.URL.createObjectURL(blob);
const a=document.createElement("a");
a.href=url;
a.download=fileName;
a.click();
window.URL.revokeObjectURL(url);
};

const exportReport=async(type)=>{
try{

let res;

if(type==="pdf")res=await downloadPDF();

if(type==="csv")res=await downloadCSV();

if(type==="excel")res=await downloadExcel();

saveFile(
res.data,
type==="pdf"
?"BusinessReport.pdf"
:type==="csv"
?"BusinessReport.csv"
:"BusinessReport.xlsx"
);

toast.success("Report Downloaded");

}catch(err){
console.log(err);
toast.error("Download Failed");
}
};

return(

<div className={styles.dashboard}>

<StatsCards stats={statsCards}/>
<div className={styles.reportActions}>
<button className={styles.reportBtn} onClick={()=>exportReport("pdf")}>PDF</button>
<button className={styles.reportBtn} onClick={()=>exportReport("excel")}>Excel</button>
<button className={styles.reportBtn} onClick={()=>exportReport("csv")}>CSV</button>
</div>

<div className={styles.grid}>



<div className={styles.leftColumn}>

<div className={styles.card}>

<div className={styles.cardHeader}>
<h3>Latest Enquiries</h3>
<button className={styles.viewAllBtn} onClick={()=>navigate("/admin/enquiries")}>View All</button>
</div>

<input
type="text"
placeholder="Search enquiries..."
value={search}
onChange={(e)=>searchContact(e.target.value)}
className={styles.search}
/>
<ContactsTable
contacts={latest}
onView={openContact}
onDelete={removeContact}
/>

</div>
{showModal&&(
<ContactModal
contact={selectedContact}
onClose={()=>setShowModal(false)}
onRead={markRead}
onDelete={removeContact}
/>
)}

</div>

<div className={styles.rightColumn}>

<div className={styles.card}>

<h3>Quick Summary</h3>

<div className={styles.summaryItem}>

<div className={styles.summaryIcon}>
<FaEnvelopeOpenText/>
</div>

<div>

<h4>{stats.total}</h4>

<p>Total Business Enquiries</p>

</div>

</div>

<div className={styles.summaryItem}>

<div className={styles.summaryIcon}>
<FaClock/>
</div>

<div>

<h4>{stats.unread}</h4>

<p>Pending Responses</p>

</div>

</div>

<div className={styles.summaryItem}>

<div className={styles.summaryIcon}>
<FaUserTie/>
</div>

<div>

<h4>{stats.todayEnquiries}</h4>
<p>Today's Enquiries</p>

</div>

</div>

</div>



</div>



</div>
</div>

);

}
