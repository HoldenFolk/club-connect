import React from 'react';
import styled from 'styled-components';
import Post from '../molecule/Post';

const PostList = ({
  posts,
  defaultLogo,
  placeholderMsg = 'No Posts Here Yet...',
}) => {
  return (
    <PostListContainer>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <PostWrapper key={index}>
            <Post
              title={post.title}
              content={post.text}
              logo={post.logo || defaultLogo}
              clubId={post.clubID}
              datePosted={post.date}
              userId={post.userID}
            />
          </PostWrapper>
        ))
      ) : (
        <PlaceholderText>{placeholderMsg}</PlaceholderText>
      )}
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

const PlaceholderText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.fourth};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 2rem;
`;
