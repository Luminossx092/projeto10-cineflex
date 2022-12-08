import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function HorarioFilme({ sessao }) {
    const { date, weekday, showtimes } = sessao;

    return (
        <>
            <TextoData>{`${weekday} - ${date}`}</TextoData>
            <ContainerHoras>
                {showtimes.map(h =>
                    <Link to={`/assentos/${h.id}`} style={{ textDecoration: 'none' }}>
                        <ContainerHorario key={h.id}><p>{h.name}</p></ContainerHorario>
                    </Link>
                )}
            </ContainerHoras>
        </>
    )
}

const TextoData = styled.p`
    height: 35px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    color: #293845;
`

const ContainerHoras = styled.div`
    width: 375px;
    display:flex;
    gap:8px;
    margin-bottom:15px;
`
const ContainerHorario = styled.div`
    height: 43px;
    width: 83px;
    border-radius: 3px;
    background: #E8833A;
    p{
        display:flex;
        justify-content:center;
        align-items:center;
        color:white;
        height: 43px;
        width: 82px;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
    }
`