import apiClient from '../apiClient';

export const isFollowing = async (reqBody, token) => {
  const response = await apiClient.post(
    '/api/followclub/isfollowing',
    reqBody,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const followClub = async (reqBody, token) => {
  const response = await apiClient.post('/api/followclub/followClub', reqBody, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const unfollowClub = async (reqBody, token) => {
  const response = await apiClient.post(
    '/api/followclub/unfollowclub',
    reqBody,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
