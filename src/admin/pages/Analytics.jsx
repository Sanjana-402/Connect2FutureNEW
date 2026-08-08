import{useEffect,useState}from"react";
import{PieChart,Pie,Cell,BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,LineChart,Line,CartesianGrid}from"recharts";
import{getAnalytics}from"../services/analyticsService";
import styles from"../styles/Analytics.module.css";

export default function Analytics(){

const[data,setData]=useState(null);

useEffect(()=>{
load();
},[]);

const load=async()=>{
try{
const res=await getAnalytics();
setData(res);
}catch(err){
console.error(err);
}
};

if(!data)return<h2>Loading Analytics...</h2>;

const pie=data.services.map(i=>({
name:i._id,
value:i.count
}));

const sub=data.subServices.map(i=>({
name:i._id,
count:i.count
}));

const monthly=data.monthly.map(i=>({
month:`${i._id.month}/${i._id.year}`,
count:i.count
}));

const daily=data.daily.map(i=>({
day:i._id,
count:i.count
}));

const status=[
{name:"Read",value:data.cards.read},
{name:"New",value:data.cards.unread}
];

const COLORS=["#ff1ea8","#7c3aed","#22c55e","#3b82f6","#f59e0b","#ef4444"];

return(
<div className={styles.analytics}>
<h1>Analytics Dashboard</h1>

<div className={styles.grid}>

<div className={styles.card}>
<h3>Enquiries by Service</h3>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie data={pie} dataKey="value" outerRadius={100}>
{pie.map((_,i)=><Cell key={i} fill={COLORS[i%COLORS.length]}/>)}
</Pie>
<Tooltip/>
</PieChart>
</ResponsiveContainer>
</div>

<div className={styles.card}>
<h3>Read vs New</h3>
<ResponsiveContainer width="100%" height={300}>
<PieChart>
<Pie data={status} dataKey="value" outerRadius={100}>
{status.map((_,i)=><Cell key={i} fill={COLORS[i]}/>)}
</Pie>
<Tooltip/>
</PieChart>
</ResponsiveContainer>
</div>

<div className={styles.card}>
<h3>Monthly Enquiries</h3>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={monthly}>
<XAxis dataKey="month"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="count" fill="#ff1ea8"/>
</BarChart>
</ResponsiveContainer>
</div>

<div className={styles.card}>
<h3>Daily Enquiries</h3>
<ResponsiveContainer width="100%" height={300}>
<LineChart data={daily}>
<CartesianGrid strokeDasharray="3 3"/>
<XAxis dataKey="day"/>
<YAxis/>
<Tooltip/>
<Line type="monotone" dataKey="count" stroke="#ff1ea8"/>
</LineChart>
</ResponsiveContainer>
</div>

<div className={styles.card}>
<h3>Top Sub Services</h3>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={sub}>
<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="count" fill="#7c3aed"/>
</BarChart>
</ResponsiveContainer>
</div>

</div>

</div>
);

}