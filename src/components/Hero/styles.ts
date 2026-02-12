import styled from "styled-components";

import heroImg from "../../assets/greetings-banner-image.webp";

export const HeroSection = styled.div`
  background-image: url(${heroImg.src});
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  min-height: 450px;
  width: 100%;
  padding: 80px 24px 0;

  ${(props) => props.theme.devices.tablet} {
    padding: 3rem 10rem 0;
    width: 100vw;
    
    
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  color: ${(props) => props.theme.colors.emerald60};
  margin-bottom: 16px;
  font-weight: 700;
  line-height: 1.2;

  ${(props) => props.theme.devices.tablet} {
    font-size: 3rem;
    line-height: 58px;
    margin-top: 3rem;
  }
`;

export const HeroContent = styled.div`
  ${(props) => props.theme.devices.tablet} {
    max-width: 450px;
    padding-bottom: 3rem;
  }
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.gray10};
  padding: ${(props) => props.theme.spacing.m};
  border-radius: 16px;
  border: 2px solid rgb(238, 238, 238);

  p {
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray60};
    margin-bottom: 32px;
  }

  ${(props) => props.theme.devices.tablet} {
    background-color: transparent;
    border: none;
    padding: 0;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const ButtonWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .hero-button {
    font-size: 18px;
    font-weight: bold;
  }

   ${(props) => props.theme.devices.tablet} {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;
