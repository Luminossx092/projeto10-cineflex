import React from "react"
import styled from "styled-components"
import BotaoLaranja from "../styles/BotaoLaranja"
import ContainerComprador from "../styles/ContainerComprador"
import ContainerFilmeEscolhido from "../styles/ContainerFilmeEscolhido"
import ContainerLegendas from "../styles/ContainerLegendas"
import ContainerSelecione from "../styles/ContainerSelecione"

export default function PageEscolhaAssento() {
    return (
        <>
            <ContainerSelecione><p>Selecione o(s) assento(s)</p></ContainerSelecione>
            <ContainerAssentos>
                <Assento><p>69</p></Assento>
                <Assento><p>13</p></Assento>
                <Assento><p>42</p></Assento>
                <Assento><p>24</p></Assento>
                <Assento><p>666</p></Assento>
                <Assento><p>-1</p></Assento>
                <Assento><p>7</p></Assento>
            </ContainerAssentos>
            <ContainerLegendas>
                <div>
                    <button className="verde"></button>
                    <p>Selecionado</p>
                </div>
                <div>
                    <button className="cinza"></button>
                    <p>Disponível</p>
                </div>
                <div>
                    <button className="amarelo"></button>
                    <p>Indisponível</p>
                </div>
            </ContainerLegendas>
            <ContainerComprador>
                <div>
                    <p>Nome do comprador</p>
                    <input placeholder="Digite seu nome..."></input>
                </div>
                <div>
                    <p>CPF do comprador</p>
                    <input placeholder="Digite seu CPF..."></input>
                </div>
            </ContainerComprador>
            <BotaoLaranja>Reservar assento(s)</BotaoLaranja>
            <ContainerFilmeEscolhido>
                <div className="QuadraBranco">
                    <img src="https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=400" />
                </div>
                <div>
                    <p>Pikachumbo</p>
                    <p>quinta 15:69</p>
                </div>
            </ContainerFilmeEscolhido>
        </>
    )
}

const ContainerAssentos = styled.div`
    width:375px;
    gap: 18px 7px;
    margin:auto;
    margin-bottom:26px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
`

const Assento = styled.div`
    height: 26px;
    width: 26px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 12px;
    background-color:#C3CFD9;
    border: 1px solid #808F9D;
    p{
        text-align:center;
        align-self:center;
        height: 9px;
        width: 13px;
        font-family: Roboto;
        font-size: 11px;
        font-weight: 400;
        }
`
const BotaoReservarAssento = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:auto;
    height: 42px;
    width: 225px;
    border-radius: 3px;
    background-color:#E8833A;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    color:white;
`