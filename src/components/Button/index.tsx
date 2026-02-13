import React from "react";

import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
  ariaLabel: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  icon,
  ariaLabel,
  fullWidth = false,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonContainer
      $variant={variant}
      aria-label={ariaLabel}
      title={ariaLabel}
      $fullWidth={fullWidth}
      {...rest}
    >
      {icon && <S.Icon>{icon}</S.Icon>}
      {children && <span>{children}</span>}
    </S.ButtonContainer>
  );
};
