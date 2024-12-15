import React, { useState, useEffect } from 'react';
import { PageTemplate } from '../../template/index';
import PrivPagesWrapper from '../PrivPagesWrapper';
import { getDashboardPosts } from '../../../api/posts';
import useAttemptLocal from '../../../hooks/useAttemptLocal';
import PostList from '../PostList';
import settings from '../../../globalSettings';

// TODO: Add dynamic post pooulation?
export const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const { authToken } = useAttemptLocal();
  const { BASE_POST_COUNT, DEFAULT_CLUB_LOGO } = settings;

  // Fetch post data on component mount
  useEffect(() => {
    const fetchAPIData = async () => {
      try {
        if (!authToken) return;
        const response = await getDashboardPosts(BASE_POST_COUNT, authToken);
        setPosts(response.posts);
        console.log(response.posts);
      } catch (error) {
        console.error('Error fetching clubData:', error);
      }
    };

    fetchAPIData();
  }, [authToken]);

  return (
    <PageTemplate>
      <PrivPagesWrapper>
        {/* Render PostList only if posts is not empty */}
        {posts && <PostList posts={posts} defaultLogo={DEFAULT_CLUB_LOGO} />}
      </PrivPagesWrapper>
    </PageTemplate>
  );
};
