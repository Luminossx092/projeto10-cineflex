import React from "react"
import styled from "styled-components";
import BotaoLaranja from "../styles/BotaoLaranja";

export default function PageConfirmacao(){
    return(
        <>
            <ContainerPedidoFeitoSucesso><p>Pedido feito com sucesso!</p></ContainerPedidoFeitoSucesso>
            <ContainerDadosComprador>
                <DadosComprador>
                    <h1>Filme e sessão</h1>
                    <p>Enola Holmes</p>
                    <p>24/06/2021 15:00</p>
                </DadosComprador>
                <DadosComprador>
                    <h1>Ingressos</h1>
                    <p>Assento 15</p>
                    <p>Assento 16</p>
                </DadosComprador>
                <DadosComprador>
                    <h1>Comprador</h1>
                    <p>Nome: João da Silva Sauro</p>
                    <p>CPF: 123.456.789-10</p>
                </DadosComprador>
            </ContainerDadosComprador>
            <BotaoLaranja>Voltar ao Home</BotaoLaranja>
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