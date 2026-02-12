"use client";
import { Button } from "../Button";
import * as S from "./styles";

export const Hero = () => {
  return (
    <S.HeroSection role="img" aria-label="imagem com estetoscópio">
      <S.HeroContent>
        <S.Title>Olá, voce está na Lacrei Saúde</S.Title>
        <S.Card>
          <p>
            Conectamos pessoas <strong>LGBTQIAPN+</strong> com profissionais de
            saúde qualificados, proporcionando experiências de cuidado seguras e
            inclusivas.
          </p>
          <S.ButtonWraper>
            <Button
              className="hero-button"
              variant="primary"
              ariaLabel="Acessar área para pacientes"
              fullWidth
            >
              Para pacientes
            </Button>
            <Button
              className="hero-button"
              variant="primary"
              ariaLabel="Acessar área para profissionais"
              fullWidth
            >
              Para profissionais
            </Button>
          </S.ButtonWraper>
        </S.Card>
      </S.HeroContent>
    </S.HeroSection>
  );
};
