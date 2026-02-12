import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { PreCadastro } from "@/components/FormCadastro";

describe("PreCadastro Form Component", () => {
  const renderForm = () =>
    render(
      <ThemeProvider theme={theme}>
        <PreCadastro />
      </ThemeProvider>
    );

  it("deve renderizar os elementos básicos do formulário", () => {
    renderForm();
    
    expect(screen.getByText(/Boas vindas à Lacrei Saúde/i)).toBeInTheDocument();
    // Usamos displayValue ou placeholder para ser específico se a label falhar
    expect(screen.getByPlaceholderText(/Digite seu e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Digite seua senha/i)).toBeInTheDocument();
  });

  it("deve validar e-mail com formato inválido", async () => {
    renderForm();

    const emailInput = screen.getByPlaceholderText(/Digite seu e-mail/i);
    
    // Simula a digitação
    fireEvent.change(emailInput, { target: { value: "email_errado" } });
    
    // Em vez de clicar no botão, vamos disparar o submit direto no formulário
    // Isso garante que o Zod seja acionado mesmo se o componente Button for complexo
    const form = screen.getByRole("textbox", { name: /e-mail/i }).closest('form');
    fireEvent.submit(form!);

    await waitFor(() => {
      // Procuramos por parte do texto para evitar erros de quebra de linha
      expect(screen.getByText(/utilize um formato de e-mail válido/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it("deve alternar a visibilidade da senha e o ícone/label do botão", () => {
    renderForm();

    // Selecionamos o input pelo placeholder para não confundir com o botão
    const passwordInput = screen.getByPlaceholderText(/Digite seua senha/i) as HTMLInputElement;
    const toggleButton = screen.getByLabelText(/Mostrar senha/i);

    // Estado inicial
    expect(passwordInput.type).toBe("password");

    // Clique para mostrar
    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe("text");
    
    // Verificamos se o label mudou para "Esconder senha"
    expect(screen.getByLabelText(/Esconder senha/i)).toBeInTheDocument();
  });
});