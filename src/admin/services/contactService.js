import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api/contact`;

export const getAllContacts = async () => {
  const response = await axios.get(API);
  return response.data.contacts;
};

export const getContactById = async (id) => {
  const response = await axios.get(`${API}/${id}`);
  return response.data.contact;
};

export const markContactAsRead = async (id) => {
  const response = await axios.put(`${API}/${id}/read`);
  return response.data;
};

export const deleteContact = async (id) => {
  const response = await axios.delete(`${API}/${id}`);
  return response.data;
};