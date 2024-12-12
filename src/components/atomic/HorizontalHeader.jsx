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
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-top: 0rem;
  margin-bottom: 2rem;
  position: relative;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  margin-left: 2rem;
  margin-top: 2rem;
`;

const CenterContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 2rem;
  margin-top: 2rem;
`;

export default HorizontalHeader;
