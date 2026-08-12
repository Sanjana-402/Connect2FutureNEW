import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/contact`;

export const getDashboardStats = async () => {
  const token = localStorage.getItem("adminToken");

  const response = await axios.get(`${API}/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getAllEnquiries = async () => {
  const token = localStorage.getItem("adminToken");

  const response = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getAllContacts = async (search = "") => {
  const token = localStorage.getItem("adminToken");

  const response = await axios.get(
    `${API}?search=${encodeURIComponent(search)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const markEnquiryRead = async (id) => {
  const token = localStorage.getItem("adminToken");

  const response = await axios.put(
    `${API}/${id}/read`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const deleteEnquiry = async (id) => {
  const token = localStorage.getItem("adminToken");

  const response = await axios.delete(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getContact = async (id) => {
  const token = localStorage.getItem("adminToken");

  const response = await axios.get(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const searchEnquiries = async (search) => {
  const token = localStorage.getItem("adminToken");

  const response = await axios.get(
    `${API}?search=${encodeURIComponent(search)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};