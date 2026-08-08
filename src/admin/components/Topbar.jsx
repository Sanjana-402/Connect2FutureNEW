import {FaBars,FaBell,FaSearch} from "react-icons/fa";
import styles from "../styles/Topbar.module.css";

export default function Topbar({collapsed,setCollapsed}){

const today=new Date();

const options={
weekday:"long",
day:"numeric",
month:"long",
year:"numeric"
};

return(

<header className={styles.topbar}>

<div className={styles.left}>

<button
className={styles.menuBtn}
onClick={()=>setCollapsed(!collapsed)}
>
<FaBars/>
</button>

<div>

<h2>Admin Dashboard</h2>

<p>{today.toLocaleDateString("en-IN",options)}</p>

</div>

</div>

<div className={styles.center}>



</div>

<div className={styles.right}>



<div className={styles.profile}>

<div className={styles.avatar}>
A
</div>

<div>

<h4>Administrator</h4>

<p>Super Admin</p>

</div>

</div>

</div>

</header>

);

}