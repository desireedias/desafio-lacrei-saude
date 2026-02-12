import styled, { css } from "styled-components";

interface ButtonProps {
  $variant: "primary" | "secondary" | "ghost";
  $fullWidth?: boolean;
}

const variantStyles = {
  primary: css`
    background-color: ${(props) => props.theme.colors.emerald60};
    color: ${(props) => props.theme.colors.gray10};
    font-size: 18px;
    border: none;
    box-shadow: ${(props) => props.theme.shadows.md};
    &:active {
      background-color: ${(props) => props.theme.colors.emerald70};
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.emerald70};
    }
  `,
  secondary: css`
    background-color: transparent;
    color: ${(props) => props.theme.colors.emerald60};
    border: 2px solid ${(props) => props.theme.colors.emerald60};
     box-shadow: ${(props) => props.theme.shadows.md};
    font-size: 18px;
    &:active {
      background-color: ${(props) => props.theme.colors.gray10};
      box-shadow: ${(props) => props.theme.shadows.md};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${(props) => props.theme.colors.emerald60};
    border: none;
    &:active {
      background-color: ${(props) => props.theme.colors.emerald20};
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.emerald10};
    }
  `,
};

export const Icon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 24px;
  width: 24px;
  height: 24px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const ButtonContainer = styled.button<ButtonProps>`
  height: 48px;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  min-width: 48px;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  border: none;
  font-weight: 700;
  font-size: 1rem;

  &:active {
    background-color: ${(props) =>
      props.$variant === "primary"
        ? props.theme.colors.emerald70
        : props.theme.colors.emerald20};
  }

  ${({ $variant }) => variantStyles[$variant as keyof typeof variantStyles]}
`;
