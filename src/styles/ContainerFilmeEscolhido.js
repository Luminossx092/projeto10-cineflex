import styled from "styled-components";

const ContainerFilmeEscolhido = styled.div`
    height: 117px;
    width: 375px;
    position: fixed;
    bottom:0;
    padding: 14px 10px;
    display:flex;
    justify-content:flex-start;
    gap:14px;
    align-items:center;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    box-sizing: border-box;
    .QuadraBranco{
        height: 89px;
        width: 64px;
        border-radius: 2px;
        background: #FFFFFF;
        display:flex;
        justify-content:center;
        align-items:center;
        img{
            height: 72px;
            width: 48px;
            }
        
    }
    div{
        display:flex;
        flex-direction:column;
        p{
        font-family: Roboto;
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
        color: #293845;
        }
    }
`

export default ContainerFilmeEscolhido;