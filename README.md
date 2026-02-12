<<<<<<< HEAD
Markdown

# 🏥 Lacrei Saúde - Desafio Front-end

Este projeto é uma aplicação moderna desenvolvida com **Next.js 14**, focada em acessibilidade, performance e uma experiência de usuário fluida. O projeto simula a interface de navegação da plataforma Lacrei Saúde, incluindo fluxos de login e pré-cadastro.

---

## 🚀 Instruções para Rodar Localmente

Siga os passos abaixo para configurar o ambiente em sua máquina:

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
   Instalar dependências:
   ```

Bash
npm install
**ou**
yarn install
Executar em modo de desenvolvimento:

Bash
npm run dev
Acessar o projeto: Abra http://localhost:3000 no seu navegador.

🏗️ Build e Deploy
Compilação de Produção
Para gerar a versão otimizada do projeto:

Bash
npm run build
Estratégia de Deploy e Rollback
Plataforma: O deploy é realizado via Vercel com integração contínua (CI/CD).

Preview Deploys: Cada Pull Request gera um link de visualização único, permitindo validar alterações antes do merge.

Rollback Simples: Caso uma nova versão apresente instabilidade, utilizamos a função Instant Rollback do painel da Vercel, selecionando a última versão estável (Deployment) e restaurando-a imediatamente.

🛠️ Escolhas Técnicas e Visuais
Tecnologias Utilizadas
Next.js (App Router): Escolhido pela otimização nativa de roteamento e SEO.

Styled Components: Utilizado para garantir estilos escopados, permitindo que componentes como o Button variem dinamicamente via props (variant).

Material Symbols: Implementação de ícones de forma leve e padronizada.

Justificativas de Design
Experiência do Usuário (UX): Implementei um loading.tsx customizado (LoaderPage) para eliminar a sensação de latência durante a navegação.

Interatividade: O Popover de entrada conta com lógica de fechamento automático ao clicar fora e efeitos de hover que utilizam as cores da marca para guiar o olhar do usuário.

Feedback Visual: A logo possui um efeito de opacidade suave no hover, indicando interatividade sem poluir visualmente.

♿ Acessibilidade e Performance
Checklist de Qualidade
Contraste de Cores: Validado para garantir leitura confortável (Mínimo nota 90 no Lighthouse).

Semântica: Uso de tags HTML5 (ul, li, button, nav) e atributos aria-label em elementos interativos sem texto.

Leitores de Tela: Estrutura testada para garantir que a navegação via teclado (Tab) e leitores de tela identifiquem corretamente os fluxos de login.

Otimizações de Performance
Next/Image: Todas as imagens e logos utilizam o componente otimizado do Next.js, garantindo lazy loading automático e redimensionamento inteligente.

Componentes de Carregamento: Uso do Suspense nativo do React através do arquivo loading.tsx.

Bundle: Minificação automática de código e otimização de ativos (assets).

### 🧪 Rodando os Testes

Para verificar a integridade dos componentes, execute:

````bash
npm test
# ou para ver o relatório de cobertura
npm run test:coverage

## 🧪 Garantia de Qualidade (QA)

Para garantir que a plataforma seja resiliente a falhas, implementei uma suíte de testes automatizados com **Jest** e **React Testing Library**. Minha abordagem focou em cenários reais de uso, garantindo que a aplicação seja acessível e funcional.

### 📊 Registro de Cobertura (Test Coverage)

| Arquivo/Pasta | % Linhas | Status |
| :--- | :--- | :--- |
| **Geral (All files)** | **94.18%** | ✅ Alta Fidelidade |
| `components/Button` | 86.95% | ✅ Validado |
| `components/Footer` | 100% | ✅ Impecável |
| `components/FormCadastro`| 94.73% | ✅ Validado |

### 🛠️ O que meus testes garantem? (Destaques Técnicos)

#### **Botão e Interação**
* **Acessibilidade:** Validei se leitores de tela identificam o botão corretamente via `aria-label`.
* **Comportamento:** Testes de disparo de eventos (fireEvent) para garantir que as funções de clique e ícones do Material Symbols sejam processados.

#### **Footer (Rodapé)**
* **Mocks Técnicos:** Implementação de mock para `window.scrollTo`, contornando limitações do JSDOM para validar a funcionalidade de "voltar ao topo".
* **Integridade de Dados:** Verificação de informações sensíveis (CNPJ) e links de navegação essenciais.

#### **Fluxo de Pré-Cadastro (Formulário)**
* **Validação com Zod:** Em vez de apenas testar o clique, simulei o `submit` direto no formulário para garantir que a integração com o **Zod** dispare as validações corretamente.
* **UX de Senha:** Testei a lógica de "mostrar/esconder senha", verificando se o label muda dinamicamente para orientar o usuário.
* **Resiliência:** Uso de seletores por `placeholder` e `displayValue`, garantindo que o teste não quebre por mudanças sutis de layout, mantendo o foco na funcionalidade.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
c56755c (Enviando arquivos do projeto)
