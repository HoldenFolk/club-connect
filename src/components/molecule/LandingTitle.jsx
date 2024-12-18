// Author: Holden Folk
import React from 'react';
import styled from 'styled-components';

// Title content component for the landing page
const LandingTitle = () => {
  return (
    <TitleCenterContainer>
      <TitleContainer>
        <Header>The Club Hub</Header>
        <SubHeader>Welcome To My Clubs</SubHeader>
        <ContentText>
          Welcome to the best club management directory for McGill. Creat, find,
          and join McGill&apos;s top clubs!
        </ContentText>
      </TitleContainer>
    </TitleCenterContainer>
  );
};

const TitleCenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
  width: 60%;
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  /* text-transform: uppercase; */
  margin-bottom: 0rem;
  opacity: 60%;
`;

const SubHeader = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2.75rem;
  font-weight: bold;
  line-height: 1.5;
  margin: 0;
`;

const ContentText = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

export default LandingTitle;
