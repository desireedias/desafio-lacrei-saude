"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "../Button";
import { Popover } from "../Popover";
import {
  ActionContainer,
  DesktopButtonContainer,
  HeaderContainer,
  LogoWrapper,
  PopoverWrapper,
} from "./styles";
import Link from "next/link";
import { IconArrowDow, IconHelp } from "../Icons";

export const Header = () => {
  const pathname = usePathname();
  const isPreCadastroPage = pathname === "/pre-cadastro";

  const logoDesktop = "/logo_lacrei_desktop.svg";
  const logo = "/logo_lacrei_mobile.svg";
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <HeaderContainer>
      <Link href="/" aria-label="Voltar para página inicial">
        <LogoWrapper>
          <div className="logo-mobile">
            <Image
              src={logo}
              height={16}
              width={150}
              alt="Logo Lacrei Saúde"
              priority
            />
          </div>
          <div className="logo-desktop">
            <Image
              src={logoDesktop}
              height={24}
              width={202}
              alt="Logo Lacrei Saúde"
              priority
            />
          </div>
        </LogoWrapper>
      </Link>

      <ActionContainer>
        {!isPreCadastroPage && (
          <div className="desktop-only">
            <DesktopButtonContainer $width="174px">
              <Button
                variant="ghost"
                ariaLabel="Ir para a página de quem somos"
              >
                Quem somos
              </Button>
            </DesktopButtonContainer>
          </div>
        )}

        <div className="mobile-only">
          <Button
            variant="ghost"
            ariaLabel="Ir para a página de ajuda"
            icon={<IconHelp size={24} />}
            onClick={() => console.log("ajuda clicada")}
          />
        </div>

        <div className="desktop-only">
          <DesktopButtonContainer $width="114px">
            <Button
              variant={isPreCadastroPage ? "secondary" : "ghost"}
              ariaLabel=""
            >
              Ajuda
            </Button>
          </DesktopButtonContainer>
        </div>

        {!isPreCadastroPage && (
          <PopoverWrapper>
            <div className="mobile-only">
              <Button
                variant="primary"
                ariaLabel="abrir opções de entrada"
                icon={<IconArrowDow size={24} />}
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              />
            </div>
            <div className="desktop-only">
              <DesktopButtonContainer $width="174px">
                <Button
                  variant="primary"
                  ariaLabel="abrir opções de entrada"
                  icon={<IconArrowDow size={24} />}
                  onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                >
                  Entrar
                </Button>
              </DesktopButtonContainer>
            </div>
            {isPopoverOpen && (
              <Popover onClose={() => setIsPopoverOpen(false)} />
            )}
          </PopoverWrapper>
        )}
      </ActionContainer>
    </HeaderContainer>
  );
};
