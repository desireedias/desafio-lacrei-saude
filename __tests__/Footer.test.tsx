import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { Footer } from "@/components/Footer";

// Mock do window.scrollTo já que o JSDOM não implementa comportamento de scroll
window.scrollTo = jest.fn();

describe("Footer Component", () => {
  const renderFooter = () =>
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );

  it("deve renderizar as informações principais do footer", () => {
    renderFooter();

    // Verifica se a logo está presente pelo alt text
    expect(screen.getByAltText("logo")).toBeInTheDocument();

    // Verifica se o CNPJ está visível
    expect(screen.getByText(/CNPJ: 51.265.351\/0001-65/i)).toBeInTheDocument();
    
    // Verifica links importantes
    expect(screen.getByText("Termos de Uso")).toBeInTheDocument();
    expect(screen.getByText("Políticas de Privacidade")).toBeInTheDocument();
  });

  it("deve renderizar os links de redes sociais com as labels corretas", () => {
    renderFooter();

    expect(screen.getByLabelText(/Instagram/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Facebook/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Linkedin/i)).toBeInTheDocument();
  });

  it("deve chamar a função scrollToTop ao clicar no botão de voltar ao topo", () => {
    renderFooter();

    const backToTopButton = screen.getByLabelText("voltar ao topo da página");
    fireEvent.click(backToTopButton);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});