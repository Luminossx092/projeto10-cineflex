import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Assento({seat,assentosEscolhidos,AdicionarOuRemoveAssento}){
    const {name, isAvailable} = seat;

    function VerificaSeEstaNaListaAssentos(){
        if(assentosEscolhidos.includes(name)){
            return ["#1AAE9E","0E7D71"];
        }
        else return ["#C3CFD9","#808F9D"];
    }

    return(
         <ContainerAssento 
            onClick={()=>isAvailable?AdicionarOuRemoveAssento(name):alert("Esse assento não está disponível")}
            color={isAvailable?VerificaSeEstaNaListaAssentos():["#FBE192","F7C52B"]}>
            <p>{name}</p>
        </ContainerAssento>
    )
}

const ContainerAssento = styled.div`
    height: 26px;
    width: 26px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 12px;
    background-color:${(props)=>props.color[0]};
    border: 1px solid ${(props)=>props.color[1]};
    box-sizing: border-box;
    p{
        color:black;
        text-align:center;
        align-self:center;
        height: 9px;
        width: 13px;
        font-family: Roboto;
        font-size: 11px;
        font-weight: 400;
        }
`