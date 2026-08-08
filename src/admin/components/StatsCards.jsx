import styles from "../styles/AdminDashboard.module.css";

export default function StatsCards({stats}){

return(

<div className={styles.statsGrid}>

{stats.map((item,index)=>(

<div
key={index}
className={styles.statCard}
>

<div
className={styles.statIcon}
style={{background:item.color}}
>

{item.icon}

</div>

<div className={styles.statContent}>

<h4>{item.title}</h4>

<h2>{item.value}</h2>

</div>

</div>

))}

</div>

);

}