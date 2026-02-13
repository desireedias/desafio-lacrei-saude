import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { Button } from "@/components/Button";
import { IconHelp } from "@/components/Icons";

describe("Button Component", () => {
  it("deve renderizar o ícone corretamente e responder ao clique", () => {
    // função mock para monitorar o clique
    const handleClick = jest.fn();

    // Renderiza com o ThemeProvider real  projeto
    render(
      <ThemeProvider theme={theme}>
        <Button
          icon={<IconHelp data-testid="icon-svg" />}
          ariaLabel="ajuda"
          onClick={handleClick}
        />
      </ThemeProvider>,
    );

    // Verificamos se contém um elemento svg
    const icon = screen.getByTestId("icon-svg");
    expect(icon).toBeInTheDocument();

    // Simula o clique no botão
    const button = screen.getByRole("button", { name: /ajuda/i });
    fireEvent.click(button);

    // O testa se a função foi chamada?
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("deve ter a acessibilidade correta (aria-label)", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button ariaLabel="usuario" />
      </ThemeProvider>,
    );

    // Verifica se o leitor de tela consegue identificar o botão pelo label
    expect(screen.getByLabelText("usuario")).toBeInTheDocument();
  });
});
