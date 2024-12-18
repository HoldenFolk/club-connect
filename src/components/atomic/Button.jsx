// Author: Holden Folk
import React from 'react';
import styled from 'styled-components';

/**
 * A customizable button component.
 *
 * @param {Object} props - Props for the button.
 * @param {string} props.text - The text to display on the button.
 * @param {"fill"|"outline"} [props.variant] - The button style, either `fill` or `outline`. Defaults to `fill`.
 * @param {string} [props.color] - The base color for the button's styling.
 * @returns {JSX.Element} The styled button component.
 */
const Button = ({ text, variant = 'fill', color = '#007BFF', ...props }) => {
  return (
    <StyledButton variant={variant} color={color} {...props}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 10px 20px;
  max-height: 50px;
  font-size: 16px;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fonts.primary || 'Arial, sans-serif'};
  border: ${({ variant, color }) =>
    variant === 'outline' ? `2px solid ${color}` : `2px solid ${color}`};
  background-color: ${({ variant, color }) =>
    variant === 'fill' ? color : 'transparent'};
  color: ${({ variant, color }) => (variant === 'outline' ? color : '#fff')};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ variant, color }) =>
      variant === 'outline' ? color : '#fff'};
    color: ${({ variant }) => (variant === 'outline' ? '#fff' : '#000')};
    border: ${({ color }) => `2px solid ${color}`};
  }
`;

export default Button;
