import {FaTimes,FaEnvelope,FaPhone,FaUser,FaBriefcase,FaRegFileAlt,FaCalendarAlt,FaCheck,FaTrash} from "react-icons/fa";
import styles from "../styles/ContactModal.module.css";

export default function ContactModal({contact,onClose,onRead,onDelete}){

if(!contact) return null;

const handleDelete=()=>{
const confirmDelete=window.confirm("Are you sure you want to delete this enquiry?");
if(confirmDelete){
onDelete(contact._id);
}
};

return(
<div className={styles.overlay} onClick={onClose}>
<div className={styles.modal} onClick={(e)=>e.stopPropagation()}>
<div className={styles.header}>
<h2>Enquiry Details</h2>
<button className={styles.closeBtn} onClick={onClose}>
<FaTimes/>
</button>
</div>

<div className={styles.body}>

<div className={styles.row}>
<div className={styles.label}><FaUser/>Name</div>
<div className={styles.value}>{contact.fullName||"-"}</div>
</div>

<div className={styles.row}>
<div className={styles.label}><FaEnvelope/>Email</div>
<div className={styles.value}>{contact.email||"-"}</div>
</div>


<div className={styles.row}>
<div className={styles.label}><FaPhone/>Phone</div>
<div className={styles.value}>
{contact.countryCode?`${contact.countryCode} ${contact.phone}`:contact.phone||"-"}
</div>
</div>



<div className={styles.row}>
<div className={styles.label}>
<FaBriefcase/>
Service
</div>
<div className={styles.value}>
{contact.service||"-"}
</div>
</div>

<div className={styles.row}>
<div className={styles.label}>
<FaBriefcase/>
Sub Service
</div>
<div className={styles.value}>
{contact.subService||"-"}
</div>
</div>




<div className={styles.messageSection}>
<h4>Message</h4>

<div className={styles.messageBox}>
{contact.message||"-"}
</div>

</div>

<div className={styles.row}>
<div className={styles.label}>Status</div>
<div className={`${styles.status} ${contact.status==="Read"?styles.read:styles.unread}`}>
{contact.status}
</div>
</div>

<div className={styles.row}>
<div className={styles.label}><FaCalendarAlt/>Submitted</div>
<div className={styles.value}>
{new Date(contact.createdAt).toLocaleString()}
</div>
</div>

</div>

<div className={styles.footer}>

{contact.status!=="Read"&&(
<button
className={styles.readBtn}
onClick={()=>onRead(contact._id)}
>
<FaCheck/>
<span>Mark as Read</span>
</button>
)}

<button
className={styles.deleteBtn}
onClick={handleDelete}
>
<FaTrash/>
<span>Delete</span>
</button>

<button
className={styles.closeButton}
onClick={onClose}
>
Close
</button>

</div>

</div>
</div>
);
}