import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import PageCatalogoFilmes from "./components/PageCatalogoFilmes";
import PageConfirmacao from "./components/PageConfirmacao";
import PageEscolhaAssento from "./components/PageEscolhaAssento";
import PageMarcarHorario from "./components/PageMarcarHorario";
import GlobalStyle from "./styles/GlobalStyles";

function App() {
  const [dadosSessao, setDadosSessao] = useState({})
  const [dadosComprador, setDadosComprador] = useState({})

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo></Logo>
      <Routes>
        <Route path="/" element={<PageCatalogoFilmes />} />
        <Route path="/sessoes/:idFilme" element={<PageMarcarHorario setDadosSessao={setDadosSessao}/>} />
        <Route path="/assentos/:idSessao" element={<PageEscolhaAssento setDadosComprador={setDadosComprador} />} />
        <Route path="/sucesso/" element={<PageConfirmacao dadosComprador={dadosComprador} dadosSessao={dadosSessao} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
