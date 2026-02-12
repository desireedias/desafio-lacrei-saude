import React from "react";

import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  iconName?: string;
  ariaLabel: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  iconName,
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
      {iconName && (
        <S.Icon className="material-symbols-outlined" aria-hidden="true">
          {iconName}
        </S.Icon>
      )}
      {children && <span>{children}</span>}
    </S.ButtonContainer>
  );
};
