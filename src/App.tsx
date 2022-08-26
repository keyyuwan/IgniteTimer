import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./routes";
import { CyclesProvider } from "./contexts/CyclesContext";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesProvider>
          <Router />
        </CyclesProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
