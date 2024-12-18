// Author: Torin Andrews
import React from 'react';
import styled from 'styled-components';

const SuccessMessage = () => {
  return (
    <Container>
      <Title>🎉 Success!</Title>
      <Message>Your request has been sent.</Message>
      <ButtonWrapper>
        <StyledButton href="/search">View Clubs</StyledButton>
        <StyledButton href="/dashboard" secondary>
          Go to Dashboard
        </StyledButton>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: #ffffff;
  color: #333;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #27ae60;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledButton = styled.a`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  background-color: ${(props) => (props.secondary ? '#3498db' : '#27ae60')};
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
`;

export default SuccessMessage;
