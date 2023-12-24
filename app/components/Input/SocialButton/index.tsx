import React from "react";

interface AuthButtonProps {
  type: "button" | "submit" | "reset";
  content: React.ReactNode;
  onClick: () => void;
}

function SocialButton({ content, onClick }: AuthButtonProps) {
  return (
    <button
      type="button"
      className="w-20 h-[60px] bg-grayColor-100 rounded-xl flex items-center justify-center text-2xl"
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default SocialButton;
