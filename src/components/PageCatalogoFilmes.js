import axios from "axios";
import React, { useState } from "react"
import ContainerSelecione from "../styles/ContainerSelecione"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function PageCatalogoFilmes() {
    const [filmes, setFilmes] = useState([]);

    useState(() => {
        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then((res) => setFilmes(res.data))
            .catch((e) => console.log(e))
    }, [])

    return (
        <>
            <ContainerSelecione>
                <p>Selecione o filme</p>
            </ContainerSelecione>
            <ContainerFilmes>
                {filmes.map(f =>
                    <Link key={f.id} to={`/sessoes/${f.id}`}>
                        <img src={f.posterURL} alt=""/>
                    </Link>)}
            </ContainerFilmes>
        </>
    )
}

const ContainerFilmes = styled.div`
    width:375px;
    margin:0 33px;
    row-gap:27px;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    img{
        height: 193px;
        width: 129px;
    }
`
