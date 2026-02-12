  "use client";

  import  logoImg from "../../assets/illustration-login.svg";

  import { zodResolver } from "@hookform/resolvers/zod";
  import { useState } from "react";
  import { useForm } from "react-hook-form";
  import { z } from "zod";

  import { Button } from "@/components/Button";

  import * as S from "./styles";
  import Image from "next/image";

  export const preCadastroSchema = z.object({
    email: z
      .string()
      .min(1, { message: 'O campo "E-mail" é obrigatório' })
      .email({
        message:
          "Por favor, utilize um formato de e-mail válido. Por exemplo: email@dominio.com.br",
      }),

    senha: z
      .string()
      .min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
  });

  export type PreCadastroData = z.infer<typeof preCadastroSchema>;

  export const PreCadastro = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<PreCadastroData>({
      resolver: zodResolver(preCadastroSchema),
    });

    // Função que roda quando o formulário é válido
    const handlePreCadastro = (data: PreCadastroData) => {
      console.log("Dados enviados:", data);
    };

    return (
      <S.MainContent>
        <S.FormContainer>
          <S.TitleGroup>
            <h2>Boas vindas à Lacrei Saúde</h2>
            <p>Entre ou crie sua senha lacrei saúde</p>
          </S.TitleGroup>
          <S.StyledForm onSubmit={handleSubmit(handlePreCadastro)}>
            {/* INPUT E-MAIL */}
            <S.InputGroup>
              <label htmlFor="email">E-mail</label>
              <S.InputField
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                {...register("email")}
                $hasError={!!errors.email}
              />
              {errors.email && (
                <S.ErrorWrapper>
                  <span className="material-symbols-outlined error-icon">
                    error
                  </span>
                  <span>{errors.email.message}</span>
                </S.ErrorWrapper>
              )}
            </S.InputGroup>
            {/* INPUT SENHA */}
            <S.InputGroup>
              <label htmlFor="senha">Senha</label>
              <S.InputContainer>
                <S.InputField
                  id="senha"
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite seua senha"
                  {...register("senha")}
                  $hasError={!!errors.senha}
                />
                {/* O botão de alternância */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="material-symbols-outlined"
                  aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                >
                  {showPassword ? "visibility" : "visibility_off"}
                </button>
              </S.InputContainer>
              {errors.senha && (
                <S.ErrorWrapper>
                  <span className="material-symbols-outlined error-icon">
                    error
                  </span>
                  <span>{errors.senha.message}</span>
                </S.ErrorWrapper>
              )}
            </S.InputGroup>
            <S.Buttons>
              <Button
                type="submit"
                fullWidth
                variant="primary"
                ariaLabel="entrar"
              >
                Entrar
              </Button>
              <Button
                type="button"
                ariaLabel="criar conta"
                variant="secondary"
                fullWidth
              >
                Criar conta
              </Button>
              <a href="#">Esqueci minha senha</a>
            </S.Buttons>
          </S.StyledForm>
        </S.FormContainer>
        <S.ImageContainer>
          <Image
            src={logoImg}
            fill
            style={{ objectFit: 'contain' }}
            alt="atendimento a pessoa usuária"
          />
        </S.ImageContainer>
      </S.MainContent>
    );
  };
