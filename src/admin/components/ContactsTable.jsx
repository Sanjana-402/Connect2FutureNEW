import{FaEye,FaTrash}from"react-icons/fa";
import styles from"../styles/ContactsTable.module.css";
export default function ContactsTable({contacts=[],
onView,
onDelete}){
const formatDate=(date)=>{
return new Date(date).toLocaleDateString("en-IN",{
day:"2-digit",
month:"short",
year:"numeric"
});
};
if(contacts.length===0){
return(
<div className={styles.empty}>
<h3>No enquiries found</h3>
<p>New enquiries will appear here.</p>
</div>
);
}
return(
<div className={styles.wrapper}>
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
{contacts.map(contact=>(
<tr key={contact._id}>
<td>
<div className={styles.user}>
<h4>{contact.fullName}</h4>
<p>{contact.email}</p>
</div>
</td>
<td>
<div>

<p>{contact.service||"-"}</p>
</div>
</td>
<td>
<span className={`${styles.badge} ${contact.status==="Read"?styles.read:styles.unread}`}>
{contact.status}
</span>
</td>
<td>{formatDate(contact.createdAt)}</td>
<td>
<div className={styles.actions}>
<button className={styles.viewBtn} onClick={()=>onView(contact._id)}>
<FaEye/>
</button>
<button className={styles.deleteBtn} onClick={()=>onDelete(contact._id)}>
<FaTrash/>
</button>
</div>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}