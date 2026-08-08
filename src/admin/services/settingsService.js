import axios from"axios";

const API="http://localhost:5000/api/settings";

export const changePassword=async(data)=>{
const token=localStorage.getItem("adminToken");

const res=await axios.put(
`${API}/password`,
data,
{
headers:{
Authorization:`Bearer ${token}`
}
}
);

return res.data;
};