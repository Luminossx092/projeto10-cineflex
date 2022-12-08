import axios from "axios"
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import BotaoLaranja from "../styles/BotaoLaranja"
import ContainerComprador from "../styles/ContainerComprador"
import ContainerFilmeEscolhido from "../styles/ContainerFilmeEscolhido"
import ContainerLegendas from "../styles/ContainerLegendas"
import ContainerSelecione from "../styles/ContainerSelecione"
import Assento from "./Assento"

export default function PageEscolhaAssento() {
    const { idSessao } = useParams();
    const [sessao, setSessao] = useState();
    const [assentosEscolhidos, setAssentosEscolhidos] = useState([])

    useState(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then((res) => setSessao(res.data))
            .catch((e) => console.log(e.response))
    }, [])

    if (sessao === undefined) {
        return (<></>)
    }

    function AdicionarOuRemoveAssento(numero) {
        if (!assentosEscolhidos.includes(numero)) {
            setAssentosEscolhidos([...assentosEscolhidos, numero])
        }
        else {
            setAssentosEscolhidos([...assentosEscolhidos.filter((a)=>a!==numero)]);
        }
    }

    return (
        <>
            <ContainerSelecione><p>Selecione o(s) assento(s)</p></ContainerSelecione>
            <ContainerAssentos>
                {sessao.seats.map(a => <Assento
                    key={a.id} s
                    seat={a}
                    assentosEscolhidos={assentosEscolhidos}
                    AdicionarOuRemoveAssento={AdicionarOuRemoveAssento}
                />)}
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
                    <img src={sessao.movie.posterURL} alt="" />
                </div>
                <div>
                    <p>{sessao.movie.title}</p>
                    <p>{`${sessao.day.weekday} ${sessao.name}`}</p>
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
    justify-content:flex-start;
    align-items:center;
`