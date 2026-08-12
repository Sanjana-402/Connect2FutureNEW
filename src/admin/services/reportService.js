import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/report`;

const token = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
  },
  responseType: "blob",
});

export const downloadPDF = () =>
  axios.get(`${API}/pdf`, token());

export const downloadCSV = () =>
  axios.get(`${API}/csv`, token());

export const downloadExcel = () =>
  axios.get(`${API}/excel`, token());