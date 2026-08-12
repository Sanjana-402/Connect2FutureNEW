import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/settings`;

export const changePassword = async (data) => {
  const token = localStorage.getItem("adminToken");

  const res = await axios.put(`${API}/password`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};