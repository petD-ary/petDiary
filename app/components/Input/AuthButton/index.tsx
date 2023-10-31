import React from "react";
import styled from "styled-components";

interface AuthButtonProps {
  type: "button" | "submit" | "reset";
  content: string;
  onClick?: () => void;
  disabled: boolean;
}

// const StyledButton = styled.button`
//   width: 100%;
//   height: 60px;
//   color: #fff;
//   background-color: #000;
//   border-radius: 8px;
//   margin-top: 60px;
//   &:disabled {
//     opacity: 0.5;
//     cursor: default;
//   }
// `;

function AuthButton({ type, content, onClick, disabled }: AuthButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full py-9 px-8 text-white bg-black mt-20 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
    >
      {content}
    </button>
  );
}

export default AuthButton;
