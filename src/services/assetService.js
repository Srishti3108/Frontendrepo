import axios from "axios";

const API_URL = "https://localhost:7107/api/Assets"; // Replace with your backend URL

export const getAssets = async () => {
  return axios.get(`${API_URL}/assets`);
};

export const getBorrowings = async () => {
  return axios.get(`${API_URL}/borrowings`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
