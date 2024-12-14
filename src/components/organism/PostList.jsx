import React from 'react';
import styled from 'styled-components';
import Post from '../molecule/Post';

const PostList = ({ posts, defaultLogo, clubName }) => {
  return (
    <PostListContainer>
      {posts.map((post, index) => (
        <PostWrapper key={index}>
          <Post
            title={post.title}
            content={post.text}
            logo={post.logo || defaultLogo}
            clubName={clubName}
            datePosted={post.date}
            userId={post.userID}
          />
        </PostWrapper>
      ))}
    </PostListContainer>
  );
};

export default PostList;

const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
`;

const PostWrapper = styled.div`
  width: 100%;
`;
