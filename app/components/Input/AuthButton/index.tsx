import React from "react";
import styled from "styled-components";

interface AuthButtonProps {
  type: "button" | "submit" | "reset";
  content: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: #000;
  border-radius: 8px;
`;

function AuthButton({ type, content, onClick }: AuthButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {content}
    </StyledButton>
  );
}

export default AuthButton;
