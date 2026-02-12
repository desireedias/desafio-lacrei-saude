import styled from "styled-components";

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  ${(props) => props.theme.devices.tablet} {
    justify-content: flex-start;
    width:52%;
    padding: 3rem 0px 5.25rem;
  }
`;
export const ImageContainer = styled.div`
  display: none;

  ${(props) => props.theme.devices.tablet} {
    display: block;
    position: relative;
    width: 48%;
    height: 400px;
  }
`;

export const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  gap: 2rem;

  ${(props) => props.theme.devices.tablet} {
    flex-direction: row;
    padding: 0;
    gap: 4rem;
    align-items: center;
    max-width: 1100px;
    width: 100%;
    justify-content: space-between;
    margin: 0 auto;
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  width: 100%;
  color: ${(props) => props.theme.colors.gray80};

  h2 {
    font-size: 1.5rem;
    line-height: 1.2em;
    font-weight: 700;

    &::after {
      content: "";
      display: block;
      margin-top: 8px;
      height: 2px;
      max-width: 10rem;
      background-color: ${(props) => props.theme.colors.emerald60};
    }
  }

  p {
    font-size: 1rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 24px;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const InputField = styled.input<{ $hasError?: boolean }>`
  height: 48px;
  border-radius: 8px;
  width: 100%;
  /* Borda condicional: se tiver erro, fica vermelho, senão usa o cinza padrão */
  border: 1px solid
    ${(props) =>
      props.$hasError
        ? props.theme.colors.textError
        : props.theme.colors.gray60};
  font-size: 16px;
  padding: 0 8px;
  font-family:
    Nunito,
    Nunito Fallback;

  &:focus {
    outline: 2px solid
      ${(props) =>
        props.$hasError
          ? props.theme.colors.textError
          : props.theme.colors.gray60};
    border-color: transparent;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;

  span {
    color: ${(props) => props.theme.colors.textError};
    font-size: 14px;
  }

  .error-icon {
    font-size: 16px;
    font-variation-settings: "FILL" 1;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  button {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    cursor: pointer;
    color: ${(props) => props.theme.colors.gray80};
    display: flex;
    align-items: center;
    justify-content: center;

    .material-symbols-outlined {
      font-size: 12px;
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 400;
  margin-top: 8px;
  color: ${(props) => props.theme.colors.textError};
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;

  a {
    color: ${(props) => props.theme.colors.emerald60};
    font-weight: 700;
  }
`;
