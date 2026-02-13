import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  height: 96px;
  padding: 0 1rem;
  background: ${(props) => props.theme.colors.gradientSubtle};

  .logo-desktop,
  .desktop-only {
    display: none;
  }
  .logo-mobile,
  .mobile-only {
    display: flex;
  }

  ${(props) => props.theme.devices.tablet} {
    padding: 1.5rem 7rem;

    .logo-mobile,
    .mobile-only {
      display: none;
    }
    .logo-desktop,
    .desktop-only {
      display: flex;
    }
  }
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7; 
  }
`;


export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.m};

  ${(props) => props.theme.devices.tablet}{
    gap: 24px;
  }
`;
export const PopoverWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DesktopButtonContainer = styled.div<{ $width: string }>`
 
  display: none;

  ${(props) => props.theme.devices.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.$width}; 
    height: 48px;

    button {
      width: 100%;
      height: 100%;
      display: flex;
      font-size: 18px;
  
      flex-direction: row-reverse;
      align-items: center;
      padding: 0 16px;
      font-weight: 700;
      gap: 24px;

      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid transparent;
        border-radius: 8px;
        min-width: calc(100% + 8px);
        min-height: calc(100% + 8px);
        transition: border-color 0.2s;
      }

      &:focus::before {
        border-color: ${(props) => props.theme.colors.emerald60};
      }
    }
  }
`;
