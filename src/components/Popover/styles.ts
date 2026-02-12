import Link from "next/link";
import styled from "styled-components";

export const PopoverContainer = styled.ul`
  position: absolute;
  top: 60px;
  right: 0;
  width: 212px;
  background-color: ${(props) => props.theme.colors.gray10};
  border-radius: 8px;
  padding: 16px;
  list-style: none;
  z-index: 1;
  display: flex;
  flex-direction: column;

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(props) => props.theme.colors.gray20};
`;

export const PopoverItem = styled.li`
  width: 100%;
  justify-content: center;
  position: relative;

  &:not(:last-child)::after {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
    content: "";
    height: 1px;
    background-color: ${(props) =>
      props.theme.colors.gray30}; /* Cor da borda */

    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 16px;
  width: 100%;
  height: 48px; /* Token height: 48px */
  color: ${(props) => props.theme.colors.gray80}; /* color-text-body */
  transition: background-color 0.2s;
  border-left: 4px solid transparent;

  &:hover {
    background-color: ${(props) => props.theme.colors.emerald10};
    border-left: 4px solid ${(props) => props.theme.colors.emerald70};

    .material-symbols-outlined {
      color: ${(props) => props.theme.colors.emerald70};
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px; /* Token width: 48px (1) */
  height: 48px; /* Token height: 48px (1) */
  padding: 12px; /* vertical/horizontal-padding: 12px (1) */
  flex-shrink: 0;
`;

export const LabelItem = styled.span`
  font-size: 16px; /* text-base */
  font-weight: 400; /* high200 geralmente indica um peso maior */
  flex-grow: 1;
  text-align: left;

  &:hover {
    color: ${(props) => props.theme.colors.emerald70};
  }
`;
