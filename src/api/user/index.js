import apiClient from '../apiClient';

export const registerUser = async (reqBody) => {
  const response = await apiClient.post('/api/users/register', reqBody);
  return response.data;
};

export const logInUser = async (reqBody) => {
  const response = await apiClient.post('/api/auth/login', reqBody);
  return response.data;
};

export const getUserById = async (userId) => {
  const response = await apiClient.get(`/api/users/${userId}`);
  return response.data;
};

export const updateUserById = async (userId, reqBody) => {
  const response = await apiClient.put(`/api/users/${userId}`, reqBody);
  return response.data;
};

export const deleteUser = async (token) => {
  const response = await apiClient.delete(`/api/users/delete/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
