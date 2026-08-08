import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getCompanies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/companies`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch companies:", error);
    throw error;
  }
};

export const getCompanyById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/companies/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch company ${id}:`, error);
    throw error;
  }
};
