import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function ListaFilmes() {
    return (
        <ContainerFilmes>
            <Link>
                <img src="https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
            </Link>
            <Link>
                <img src="https://images.pexels.com/photos/3149900/pexels-photo-3149900.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
            </Link>
            <Link>
                <img src="https://images.pexels.com/photos/2315712/pexels-photo-2315712.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
            </Link>
            <Link>
                <img src="https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
            </Link>
        </ContainerFilmes>
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