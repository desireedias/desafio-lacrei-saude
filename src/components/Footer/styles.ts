import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  padding-top: 64px;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
    border-top: 1px solid rgb(176, 224, 211);
    padding: 2rem 0;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
  }

  .logo-container {
    display: none;
  }

  ${(props) => props.theme.devices.tablet} {
    .container {
      justify-content: space-between;
      flex-direction: row;
      max-width: 1100px;
      margin: 0 auto;
      gap: 1rem;
      align-items: flex-start;
    }

    .logo-container {
      display: block;
    }

    button {
      align-self: flex-end;
    }
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  ${(props) => props.theme.devices.tablet} {
    margin-left: 5rem;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

export const LacreiInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    margin-top: 2rem;
    font-size: 0.75rem;
    color: rgb(81, 81, 81);
  }

  ${(props) => props.theme.devices.tablet} {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 8rem;
    align-items: center;

    span{
      margin-top: 0;
    }
  }
`;

export const LacreiInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .social-links {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    list-style: none;
    font-size: 14px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray80};
  }

  ${(props) => props.theme.devices.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

export const FooterBotton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) => props.theme.devices.tablet} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
