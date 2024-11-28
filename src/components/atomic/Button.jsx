import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../../styles/constants";

// Button component
const Button = ({ text , variant = 'fill', ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: ${({ variant, theme }) =>
    variant === "outline" ? `2px solid ${theme.colors.secondary}` : "none"};
  background-color: ${({ variant, color }) =>
    variant === "fill" ? theme.colors.secondary : "transparent"};
  color: ${({ variant, theme }) =>
    variant === "outline" ? theme.colors.secondary : theme.colors.white};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ variant, color }) =>
      variant === "outline" ? color || "#007bff" : "#0056b3"};
    color: ${({ variant }) => (variant === "outline" ? "#fff" : "#fff")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

export default Button;
