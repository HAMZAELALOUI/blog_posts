// components/Button.tsx
"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-3 rounded-md bg-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
