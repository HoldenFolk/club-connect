import React from 'react';
import styled from 'styled-components';

/**
 * A customizable button component that is just text.
 *
 * @param {Object} props - Props for the button.
 * @param {string} props.text - The text to display on the button.
 * @returns {JSX.Element} The styled button component.
 */
const ClickableText = ({ text, variant = 'light', ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  max-height: 50px;
  font-size: 16px;
  border: none;
  font-weight: bold;
  background-color: transparent;
  color: ${({ theme, variant }) =>
    variant == 'light' ? theme.colors.white : theme.colors.fourth};
  font-family: ${({ theme }) => theme.fonts.primary};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default ClickableText;
