
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.gray10};
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid ${(props) => props.theme.colors.gray20};
  border-top: 5px solid ${(props) => props.theme.colors.emerald70};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
