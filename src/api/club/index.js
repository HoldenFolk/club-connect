import apiClient from '../apiClient';

export const getClubByName = async (clubName) => {
  const response = await apiClient.get(`/api/clubs/name/${clubName}`);
  return response.data;
};

export const getClubById = async (clubId) => {
  const response = await apiClient.get(`/api/clubs/${clubId}`);
  return response.data;
};

export const createClub = async (reqBody, token) => {
  console.log(reqBody, token);
  const response = await apiClient.post('/api/clubs/create', reqBody, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
