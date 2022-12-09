import axios from "axios"
import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import BotaoLaranja from "../styles/BotaoLaranja"
import ContainerComprador from "../styles/ContainerComprador"
import ContainerFilmeEscolhido from "../styles/ContainerFilmeEscolhido"
import ContainerLegendas from "../styles/ContainerLegendas"
import ContainerSelecione from "../styles/ContainerSelecione"
import Assento from "./Assento"

export default function PageEscolhaAssento({ setDadosComprador }) {
    const { idSessao } = useParams();
    const [sessao, setSessao] = useState();
    const [assentosEscolhidos, setAssentosEscolhidos] = useState([])
    const [name, setName] = useState("");
    const [CPF, setCPF] = useState("");
    const navigate = useNavigate()

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
            setAssentosEscolhidos([...assentosEscolhidos.filter((a) => a !== numero)]);
        }
    }

    function ReservarAssentos(e) {
        e.preventDefault();
        const temp = { ids: assentosEscolhidos, name, cpf: CPF }
        axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", temp)
            .then(() => {
                setDadosComprador(temp);
                navigate("/sucesso/");
            })
            .catch((err) => console.log(err))
    }



    return (
        <>
            <ContainerSelecione><p>Selecione o(s) assento(s)</p></ContainerSelecione>
            <ContainerAssentos>
                {sessao.seats.map(a => <Assento
                    data-test="seat"
                    key={a.id} s
                    seat={a}
                    assentosEscolhidos={assentosEscolhidos}
                    AdicionarOuRemoveAssento={AdicionarOuRemoveAssento}
                />)}
            </ContainerAssentos>
            <ContainerLegendas>
                <div>
                    <div className="verde"></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div className="cinza"></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div className="amarelo"></div>
                    <p>Indisponível</p>
                </div>
            </ContainerLegendas>
            <ContainerComprador>
                <form onSubmit={ReservarAssentos}>
                    <div>
                        <p>Nome do comprador</p>
                        <input
                            data-test="client-name"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Digite seu nome..."></input>
                    </div>
                    <div >
                        <p>CPF do comprador</p>
                        <input
                            data-test="client-cpf"
                            required
                            type="number"
                            value={CPF}
                            onChange={e => setCPF(e.target.value)}
                            placeholder="Digite seu CPF..."></input>
                    </div>
                    <BotaoLaranja data-test="book-seat-btn">Reservar assento(s)</BotaoLaranja>
                </form>
            </ContainerComprador>
            <ContainerFilmeEscolhido data-test="footer" >
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