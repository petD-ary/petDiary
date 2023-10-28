import React from "react";
import styled from "styled-components";

interface AuthButtonProps {
  type: "button" | "submit" | "reset";
  content: string;
  onClick?: () => void;
  disabled: boolean;
}

const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: #000;
  border-radius: 8px;
  margin-top: 60px;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

function AuthButton({ type, content, onClick, disabled }: AuthButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {content}
    </StyledButton>
  );
}

export default AuthButton;
