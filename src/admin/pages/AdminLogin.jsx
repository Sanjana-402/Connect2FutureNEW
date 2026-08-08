import {useState} from "react";
import {FaEnvelope,FaLock,FaEye,FaEyeSlash} from "react-icons/fa";
import {HiSparkles} from "react-icons/hi";
import styles from "../styles/AdminLogin.module.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";



export default function AdminLogin(){
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[showPassword,setShowPassword]=useState(false);
const  navigate=useNavigate();


const handleSubmit=async(e)=>{
e.preventDefault();

try{

const response=await axios.post(
"http://localhost:5000/api/admin/login",
{
email,
password
}
);

localStorage.setItem(
"adminToken",
response.data.token
);

localStorage.setItem(
"adminInfo",
JSON.stringify(response.data.admin)
);

toast.success("Login Successful");

navigate("/admin/dashboard");

}
catch(error){

console.error(error);

toast.error(
error.response?.data?.message||
"Login Failed"
);

}
};

return(
<div className={styles.loginPage}>
<div className={styles.overlay}></div>

<div className={styles.leftSection}>


<div className={styles.leftContent}>
<span className={styles.tag}><HiSparkles/>Admin Portal</span>
<h2>Welcome Back.</h2>
<p>Securely access your Connect2Future Admin Dashboard to manage enquiries, analytics, business operations and much more.</p>

<div className={styles.features}>
<div>
<h4>Manage Enquiries</h4>
<p>View every contact submission instantly.</p>
</div>

<div>
<h4>Real-Time Dashboard</h4>
<p>Monitor all business activities in one place.</p>
</div>

</div>
</div>
</div>

<div className={styles.rightSection}>
<div className={styles.loginCard}>

<h2>Admin Login</h2>

<p>Enter your credentials to continue.</p>

<form onSubmit={handleSubmit}>

<div className={styles.inputGroup}>
<FaEnvelope/>
<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>
</div>

<div className={styles.inputGroup}>
<FaLock/>
<input
type={showPassword?"text":"password"}
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button
type="button"
className={styles.eye}
onClick={()=>setShowPassword(!showPassword)}
>
{showPassword?<FaEyeSlash/>:<FaEye/>}
</button>

</div>

<button
className={styles.loginBtn}
type="submit"
>
Login
</button>

</form>

<div className={styles.footer}>
© {new Date().getFullYear()} Connect2Future. All Rights Reserved.
</div>

</div>
</div>

</div>
);
}