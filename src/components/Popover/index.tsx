"use client";

import { useEffect, useRef } from "react";
import { Icon } from "../Button/styles";
import * as S from "./styles";
import { ROUTES } from "@/constants/routes";
import { IconMedical, IconPerson } from "../Icons";

interface PopoverProps {
  onClose: () => void;
}

export const Popover = ({ onClose }: PopoverProps) => {
  const popoverRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Se o clique for fora do elemento referenciado, dispara o onClose
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);


  return (
    <S.PopoverContainer ref={popoverRef}>
      <S.PopoverItem>
        <S.StyledLink
          href={ROUTES.USER_REGISTRATION}
          aria-label="login de paciente"
        >
          <S.IconWrapper>
            <Icon>
              <IconPerson size={24}/>
            </Icon>
          </S.IconWrapper>
          <S.LabelItem>Paciente</S.LabelItem>
        </S.StyledLink>
      </S.PopoverItem>

      <S.PopoverItem>
        <S.StyledLink
          href={ROUTES.USER_REGISTRATION}
          aria-label="login de profissional"
        >
          <S.IconWrapper>
            <Icon>
              <IconMedical size={24} />
            </Icon>
          </S.IconWrapper>
          <S.LabelItem>Profissional</S.LabelItem>
        </S.StyledLink>
      </S.PopoverItem>
    </S.PopoverContainer>
  );
};
