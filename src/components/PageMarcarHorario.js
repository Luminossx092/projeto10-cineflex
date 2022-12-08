import React from "react"
import styled from "styled-components"
import HorarioFilme from "./HorarioFilme"
import ContainerSelecione from "../styles/ContainerSelecione"
import ContainerFilmeEscolhido from "../styles/ContainerFilmeEscolhido"

export default function PageMarcarHorario() {
    return (
        <>
            <ContainerSelecione>
                <p>Selecione o horário</p>
            </ContainerSelecione>
            <ContainerHorarios>
                <HorarioFilme></HorarioFilme>
                <HorarioFilme></HorarioFilme>
            </ContainerHorarios>
            <ContainerFilmeEscolhido>
                <div className="QuadraBranco">
                    <img src="https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=400" />
                </div>
                <div>
                    <p>Pikachumbo</p>
                </div>
            </ContainerFilmeEscolhido>
        </>
    )
}

const ContainerHorarios = styled.div`
    width:375px;
    margin:0 23px;
    row-gap:23px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`

