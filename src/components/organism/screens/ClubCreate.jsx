import React from 'react';
import styled from 'styled-components';
import CreateClubForm from '../../molecule/CreateClubForm';
import { PageTemplate } from '../../template/index';
import PrivPagesWrapper from '../PrivPagesWrapper';

export const ClubCreate = () => {
  return (
    <PageTemplate>
      <PrivPagesWrapper>
        <Title>Create your club</Title>
        <CreateClubForm />
      </PrivPagesWrapper>
    </PageTemplate>
  );
};

const Title = styled.h2`
  text-align: center;
  margin-left: 6rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`;
