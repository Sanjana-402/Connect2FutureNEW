import{useState}from"react";
import{FaEnvelope,FaLock,FaSave}from"react-icons/fa";
import{changePassword}from"../services/settingsService";
import toast from"react-hot-toast";
import{useNavigate}from"react-router-dom";
import styles from"../styles/Settings.module.css";

export default function Settings(){

const navigate=useNavigate();

const[email]=useState(JSON.parse(localStorage.getItem("adminInfo"))?.email||"");

const[currentPassword,setCurrentPassword]=useState("");
const[newPassword,setNewPassword]=useState("");
const[confirmPassword,setConfirmPassword]=useState("");
const[loading,setLoading]=useState(false);

const handleSubmit=async(e)=>{
e.preventDefault();

if(newPassword!==confirmPassword){
toast.error("Passwords do not match");
return;
}

try{

setLoading(true);

const res=await changePassword({
currentPassword,
newPassword
});

toast.success(res.message);

localStorage.removeItem("adminToken");
localStorage.removeItem("adminInfo");

setTimeout(()=>{
navigate("/admin/login");
},1200);

}catch(err){

toast.error(err.response?.data?.message||"Failed");

}finally{
setLoading(false);
}

};

return(
<div className={styles.settings}>
<h1>Account Settings</h1>

<form className={styles.form} onSubmit={handleSubmit}>

<div className={styles.group}>
<label><FaEnvelope/>Admin Email</label>
<input type="email" value={email} disabled/>
</div>

<div className={styles.group}>
<label><FaLock/>Current Password</label>
<input type="password" value={currentPassword} onChange={(e)=>setCurrentPassword(e.target.value)} required/>
</div>

<div className={styles.group}>
<label><FaLock/>New Password</label>
<input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} required/>
</div>

<div className={styles.group}>
<label><FaLock/>Confirm Password</label>
<input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
</div>

<button className={styles.saveBtn} disabled={loading}>
<FaSave/>
{loading?"Saving...":"Save Changes"}
</button>

</form>

</div>
);

}