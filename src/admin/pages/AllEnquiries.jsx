import{useEffect,useState}from"react";
import{FaEye,FaTrash}from"react-icons/fa";
import{useNavigate}from"react-router-dom";
import ContactModal from"../components/ContactModal";
import{getAllContacts,getContact,deleteEnquiry,markEnquiryRead}from"../services/dashboardService";
import styles from"../styles/AllEnquiries.module.css";

export default function AllEnquiries(){
const navigate=useNavigate();
const[contacts,setContacts]=useState([]);
const[loading,setLoading]=useState(true);
const[search,setSearch]=useState("");
const[selectedContact,setSelectedContact]=useState(null);
const[showModal,setShowModal]=useState(false);

const loadContacts=async(value="")=>{
try{
setLoading(true);
const data=await getAllContacts(value);
setContacts(data.contacts||[]);
}catch(error){
console.error(error);
}finally{
setLoading(false);
}
};

useEffect(()=>{
loadContacts();
},[]);

const openContact=async(id)=>{
try{
const data=await getContact(id);
setSelectedContact(data.contact);
setShowModal(true);
}catch(error){
console.error(error);
}
};

const handleSearch=async(e)=>{
const value=e.target.value;
setSearch(value);
await loadContacts(value);
};

const markRead=async(id)=>{
try{
await markEnquiryRead(id);
setShowModal(false);
await loadContacts(search);
}catch(error){
console.error(error);
}
};

const removeContact=async(id)=>{
if(!window.confirm("Are you sure you want to delete this enquiry?"))return;
try{
await deleteEnquiry(id);
setShowModal(false);
await loadContacts(search);
}catch(error){
console.error(error);
}
};

return(
<div className={styles.page}>
<div className={styles.card}>
<div className={styles.header}>
<div>
<h1>All Enquiries</h1>
<p>View and manage all submitted enquiries.</p>
</div>
<button className={styles.backBtn} onClick={()=>navigate("/admin/dashboard")}>Back to Dashboard</button>
</div>

<div className={styles.searchWrap}>
<input
type="text"
value={search}
onChange={handleSearch}
placeholder="Search enquiries..."
className={styles.search}
/>
</div>

<div className={styles.tableWrap}>
<table className={styles.table}>
<thead>
<tr>
<th>Name</th>
<th>Service</th>
<th>Status</th>
<th>Date</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{loading?(
<tr>
<td colSpan="5" className={styles.message}>Loading enquiries...</td>
</tr>
):contacts.length===0?(
<tr>
<td colSpan="5" className={styles.message}>No enquiries found.</td>
</tr>
):(
contacts.map(contact=>(
<tr key={contact._id}>
<td>
<div className={styles.name}>{contact.fullName}</div>
<div className={styles.email}>{contact.email}</div>
</td>
<td>{contact.service||"-"}</td>
<td>
<span className={`${styles.status} ${contact.status==="Read"?styles.read:styles.new}`}>
{contact.status}
</span>
</td>
<td>{new Date(contact.createdAt).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}</td>
<td>
<div className={styles.actions}>
<button className={styles.viewBtn} onClick={()=>openContact(contact._id)} title="View">
<FaEye/>
</button>
<button className={styles.deleteBtn} onClick={()=>removeContact(contact._id)} title="Delete">
<FaTrash/>
</button>
</div>
</td>
</tr>
))
)}
</tbody>
</table>
</div>
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
);
}