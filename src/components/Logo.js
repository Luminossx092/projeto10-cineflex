import React from "react"
import styled from "styled-components"

export default function Logo(){
    return(
        <ContainerLogo>
            <h1>CINEFLEX</h1>
        </ContainerLogo>
    )
}

const ContainerLogo = styled.div`
    height: 67px;
    width: 100%;
    position: fixed;
    top:0;
    background: #C3CFD9;
    display:flex;
    justify-content:center;
    align-items:center;
    h1{
        font-family: Roboto;
        font-size: 34px;
        font-weight: 400;
        color: #E8833A;    
    }
`