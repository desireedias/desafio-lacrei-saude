"use client";

import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email-icon.svg";
import globalLogo from '../../assets/global-logo.svg'

import Image from "next/image";
import * as S from "./styles";
import { Button } from "../Button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <S.FooterContainer>
      <div className="container">
        <div className="logo-container">
            <Image src={globalLogo} height={48} width={166} alt="logo" />
        </div>
        <S.FooterLeft>
          <S.LinksContainer>
            <a href="">Lacrei Saúde</a>
            <a href="">Lacrei Pessoas Profissionais</a>
            <a href="">Políticas de Privacidade</a>
            <a href="">Termos de Uso</a>
          </S.LinksContainer>
          <S.FooterBotton>
            <S.LacreiInfosContainer>
              <S.LacreiInfos>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/lacrei.saude/"
                    target="blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook site externo - abrirá uma nova janela"
                  >
                    <Image
                      src={facebook}
                      loading="lazy"
                      height={32}
                      width={32}
                      alt="facebook"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/lacrei.saude"
                    target="blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram site externo - abrirá uma nova janela"
                  >
                    <Image
                      src={instagram}
                      loading="lazy"
                      height={32}
                      width={32}
                      alt="instagram"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/lacrei"
                    target="blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin site externo - abrirá uma nova janela"
                  >
                    <Image
                      src={linkedin}
                      loading="lazy"
                      height={32}
                      width={32}
                      alt="linkedin"
                    />
                  </a>
                  <a
                    href="mailto:suporte@lacreisaude.com.br"
                    target="blank"
                    rel="noopener noreferrer"
                    aria-label="Email site externo - abrirá uma nova janela"
                  >
                    <Image
                      src={email}
                      loading="lazy"
                      height={32}
                      width={32}
                      alt="email"
                    />
                  </a>
                </div>
              </S.LacreiInfos>
              <span>CNPJ: 51.265.351/0001-65</span>
            </S.LacreiInfosContainer>
            <Button
              iconName="expand_less"
              onClick={scrollToTop}
              variant="secondary"
              ariaLabel="voltar ao topo da página"
            ></Button>
          </S.FooterBotton>
        </S.FooterLeft>
      </div>
    </S.FooterContainer>
  );
};
