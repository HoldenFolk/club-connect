import apiClient from '../apiClient';

export const registerUser = async (reqBody) => {
  const response = await apiClient.post('/api/users/register', reqBody);
  return response.data;
};

export const logInUser = async (reqBody) => {
  const response = await apiClient.post('/api/auth/login', reqBody);
  return response.data;
};
