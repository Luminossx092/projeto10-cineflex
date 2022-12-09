import React, { useState } from "react"
import styled from "styled-components"
import HorarioFilme from "./HorarioFilme"
import ContainerSelecione from "../styles/ContainerSelecione"
import ContainerFilmeEscolhido from "../styles/ContainerFilmeEscolhido"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function PageMarcarHorario({ setDadosSessao }) {
    const { idFilme } = useParams();
    const [sessoes, setSessoes] = useState();

    useState(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
            .then((res) => setSessoes(res.data))
            .catch((e) => console.log(e.response))
    }, [])

    if (sessoes === undefined) {
        return (<></>)
    }

    return (
        <>
            <ContainerSelecione>
                <p>Selecione o horário</p>
            </ContainerSelecione>
            <ContainerHorarios>
                {sessoes.days.map((s) =>
                    <div data-test="movie-day">
                        <HorarioFilme key={s.id} sessao={s} setDadosSessao={setDadosSessao} title={sessoes.title} />
                    </div>
                )}
            </ContainerHorarios>
            <ContainerFilmeEscolhido data-test="footer">
                <div className="QuadraBranco">
                    <img src={sessoes.posterURL} alt="" />
                </div>
                <div>
                    <p>{sessoes.title}</p>
                </div>
            </ContainerFilmeEscolhido>
        </>
    )
}

const ContainerHorarios = styled.div`
    width:375px;
    margin:0 23px;
    margin-bottom:117px; 
    row-gap:23px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

