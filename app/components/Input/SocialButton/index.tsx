import React from "react";
import styled from "styled-components";

interface AuthButtonProps {
  type: "button" | "submit" | "reset";
  content: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  width: 80px;
  height: 60px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

function SocialButton({ content, onClick }: AuthButtonProps) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {content}
    </StyledButton>
  );
}

export default SocialButton;
