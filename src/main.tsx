import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Container from "./components/Container";
import { GlobalStyle } from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);
