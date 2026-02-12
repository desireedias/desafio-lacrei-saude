"use client";

import { ThemeProvider } from "styled-components";

import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/globalStyles";
import { theme } from "@/styles/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
