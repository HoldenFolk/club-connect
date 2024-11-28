import React from "react";
import styled from "styled-components";


/**
 * A customizable button component.
 *
 * @param {Object} props - Props for the button.
 * @param {string} props.text - The text to display on the button.
 * @param {"fill"|"outline"} [props.variant] - The button style, either `fill` or `outline`. Defaults to `fill`.
 * @returns {JSX.Element} The styled button component.
 */
const Button = ({ text , variant = 'fill', ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 10px 20px;
  max-height: 50px;
  font-size: 16px;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fonts.primary};
  border: ${({ variant, theme }) =>
    variant === "outline" ? `2px solid ${theme.colors.white}` : `2px solid ${theme.colors.white}`};
  background-color: ${({ variant, theme }) =>
    variant === "fill" ? theme.colors.white : "transparent"};
  color: ${({ variant, theme }) =>
    variant === "outline" ? theme.colors.white : theme.colors.fourth};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === "outline" ? theme.colors.white : theme.colors.white};
    color: ${({ variant, theme }) => (variant === "outline" ?  theme.colors.secondary: theme.colors.secondary )};
    border: ${({ variant, theme }) => 
      variant === "outline" ? `2px solid ${theme.colors.white}` : `2px solid ${theme.colors.secondary}`};
  }
`;

export default Button;
