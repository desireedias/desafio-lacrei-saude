import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    font-family: var(--font-nunito), sans-serif;
    -webkit-font-smoothing: antialiased;

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .material-symbols-outlined{
        font-variation-settings: 
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
        display: inline-block;
        line-height: 1;
        text-transform: none;
        user-select: none;
        
    }
`;


// No seu styles.ts do PreCadastro ou nos estilos globais
export const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3); // Cor de fundo do círculo
  border-radius: 50%;
  border-top-color: #ffffff; // Cor da parte que gira
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;