// Author: Holden Folk
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, text = '', onClick, ...props }) => {
  return (
    <ClickableWrapper onClick={onClick} {...props}>
      <FontAwesomeIcon icon={icon} size={'2x'} />
      <IconText> {text} </IconText>
    </ClickableWrapper>
  );
};

export default Icon;

const ClickableWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  column-gap: 1rem;

  &:hover {
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const IconText = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  max-height: 50px;
  font-size: 16px;
  border: none;
`;
