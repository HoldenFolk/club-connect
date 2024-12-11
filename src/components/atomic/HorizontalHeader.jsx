import React from 'react';
import styled from 'styled-components';

// Header component with left, center (children), and right elements
const HorizontalHeader = ({ leftElement, children, rightElement }) => {
  return (
    <HeaderDiv>
      <LeftContent>{leftElement}</LeftContent>
      <CenterContent>{children}</CenterContent>
      <RightContent>{rightElement}</RightContent>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 3rem;
  position: relative;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const CenterContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 30px;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 4rem;
`;

export default HorizontalHeader;
