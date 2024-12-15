import React from 'react';
import { PageTemplate } from '../../template';
import PrivPagesWrapper from '../PrivPagesWrapper';
import PostForm from '../../molecule/PostForm';
import styled from 'styled-components';

export const PostPage = () => {
  return (
    <PageTemplate>
      <PrivPagesWrapper>
        <CenterContainer>
          <PostForm />
        </CenterContainer>
      </PrivPagesWrapper>
    </PageTemplate>
  );
};

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
