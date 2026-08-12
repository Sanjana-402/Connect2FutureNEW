import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/analytics`;

export const getAnalytics = async () => {
  const token = localStorage.getItem("adminToken");

  const response = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};