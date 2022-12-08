import React from "react"
import ContainerSelecione from "../styles/ContainerSelecione"
import ListaFilmes from "./ListaFilmes"

export default function PageCatalogoFilmes() {
    return (
        <>
            <ContainerSelecione>
                <p>Selecione o filme</p>
            </ContainerSelecione>
            <ListaFilmes />
        </>
    )
}

