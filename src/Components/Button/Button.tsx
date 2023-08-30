import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

interface ButtonProps {
  text?: string;
  icon?: string;
  variant?: "primary" | "secondary" | "goBack1" | "goBack2";
  onClick?: () => void;
  className?: string;
  linkTo?: string;
}

export default function Button({
  text,
  icon,
  variant = "primary",
  onClick,
  className,
  linkTo,
}: ButtonProps) {
  const buttonContent = (
    <>
      {icon && <img src={icon} alt="button-icon" />}
      {text}
    </>
  );

  if (linkTo) {
    return (
      <Link
        to={linkTo}
        className={`custom-button ${variant} ${className || ""}`}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`custom-button ${variant} ${className || ""}`}
    >
      {buttonContent}
    </button>
  );
}
