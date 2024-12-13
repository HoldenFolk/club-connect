import apiClient from '../apiClient';

export const createPost = async (reqBody) => {
  const response = await apiClient.post('/api/posts/', reqBody);
  return response.data;
};

export const getClubPosts = async (clubName, postCount) => {
  const response = await apiClient.get(
    `/api/posts/clubfeed/${clubName}/${postCount}`
  );
  return response.data;
};
