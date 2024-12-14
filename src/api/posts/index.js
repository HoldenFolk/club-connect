import apiClient from '../apiClient';

export const createPost = async (reqBody) => {
  const response = await apiClient.post('/api/posts/', reqBody);
  return response.data;
};

export const getClubPosts = async (clubName, postCount) => {
  console.log('Club Name: ', clubName);
  const response = await apiClient.get(
    `/api/posts/clubfeed/${clubName}/${postCount}`
  );
  return response.data;
};

export const getDashboardPosts = async (postCount, token) => {
  const response = await apiClient.get(`/api/posts/dashboard/${postCount}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
