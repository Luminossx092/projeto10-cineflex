import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import PageCatalogoFilmes from "./components/PageCatalogoFilmes";
import PageConfirmacao from "./components/PageConfirmacao";
import PageEscolhaAssento from "./components/PageEscolhaAssento";
import PageMarcarHorario from "./components/PageMarcarHorario";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Logo></Logo>
      <Routes>
        <Route path="/" element={<PageConfirmacao />} />
        <Route path="/assentos/IdAssento" element={<PageEscolhaAssento />} />
        <Route path="/sessoes/IdSessoes" element={<PageMarcarHorario />} />
        <Route path="/" element={<PageCatalogoFilmes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
