import axios from 'axios';

const API_URL = 'https://localhost:7107/api/Employees';

export const getEmployees = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

export const deleteEmployee = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
