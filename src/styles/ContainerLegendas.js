import styled from "styled-components";

const ContainerLegendas = styled.div`
    width:375px;
    margin:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    div{
        display:flex;
        flex-direction:column;
        align-items:center;
        button{
            height: 25px;
            width: 25px;
            border-radius: 17px;
            .verde{
                border: 1px solid #0E7D71;
                background-color:#1AAE9E;
            }
            .cinza{
                border: 1px solid #7B8B99;
                background-color:#C3CFD9;
            }
            .amarelo{
                border: 1px solid #F7C52B;
                background-color:#FBE192;
            }
        }
        p{
            height: 28px;
            width: 65px;
            font-family: Roboto;
            font-size: 13px;
            font-weight: 400;
        }
    }
`

export default ContainerLegendas;