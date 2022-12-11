import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";
import BotaoLaranja from "../styles/BotaoLaranja";

export default function PageConfirmacao({dadosComprador,dadosSessao}) {
    const{title, date, showtime} = dadosSessao;
    const {name, cpf, ids} = dadosComprador;

    return (
        <>
            <ContainerPedidoFeitoSucesso><p>Pedido feito com sucesso!</p></ContainerPedidoFeitoSucesso>
            <ContainerDadosComprador>
                <DadosComprador data-test="movie-info">
                    <h1>Filme e sessão</h1>
                    <p>{title}</p>
                    <p>{date} {showtime}</p>
                </DadosComprador>
                <DadosComprador data-test="seats-info">
                    <h1>Ingressos</h1>
                    {ids.map((i)=><p key={i}>Assento {i}</p>)}
                </DadosComprador>
                <DadosComprador data-test="client-info">
                    <h1>Comprador</h1>
                    <p>Nome: {name}</p>
                    <p>CPF: {cpf}</p>
                </DadosComprador>
            </ContainerDadosComprador>
            <Link to="/">
                <BotaoLaranja data-test="go-home-btn" >Voltar ao Home</BotaoLaranja>
            </Link>
        </>
    )
}

const ContainerPedidoFeitoSucesso = styled.div`
    height: 110px;
    width:175px;
    margin:auto;
    margin-top: 67px;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    text-align:center;
    p{font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #247A6B;
    font-family: Roboto;
}`

const ContainerDadosComprador = styled.div`
    width:375px;
    margin:29px auto;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`
const DadosComprador = styled.div`
    height: 110px;
    width: 374px;
    font-family: Roboto;
    text-align: left;
    color:#293845;
    h1{
        margin-bottom:10px;
        font-size: 24px;
        font-weight: 700;
        
    }
    p{
        font-size: 22px;
        font-weight: 400;
        line-height:24px;
    }
`