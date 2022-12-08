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
        <Route path="/" element={<PageCatalogoFilmes />} />
        <Route path="/sessoes/:idFilme" element={<PageMarcarHorario />} />
        <Route path="/assentos/:idSessao" element={<PageEscolhaAssento />} />
        <Route path="/sucesso/" element={<PageConfirmacao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
