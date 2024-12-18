// Author: Holden Folk
import React from 'react';
import styled from 'styled-components';

// Header component with left, center (children), and right elements
const HorizontalHeader = ({
  leftElement,
  children,
  rightElement,
  ...props
}) => {
  return (
    <HeaderDiv {...props}>
      <LeftContent>{leftElement}</LeftContent>
      <CenterContent>{children}</CenterContent>
      <RightContent>{rightElement}</RightContent>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0rem;
  margin-bottom: 1rem;
  position: relative;
`;

const LeftContent = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 2rem;
  margin-top: 1rem;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const CenterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1; /* Allow the center content to grow/shrink dynamically */
  gap: 30px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

const RightContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  margin-right: 2rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    margin-right: 0;
  }
`;

export default HorizontalHeader;
