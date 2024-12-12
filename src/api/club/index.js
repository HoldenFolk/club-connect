import apiClient from '../apiClient';

export const getClubByName = async (clubName) => {
  const response = await apiClient.get(`/api/clubs/name/${clubName}`);
  return response.data;
};
