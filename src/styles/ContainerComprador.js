import styled from "styled-components";

const ContainerComprador = styled.div`
    form{
    width: 375px;
    margin: 40px auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:7px;

    p{
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        text-align: left;
        color: #293845;
    }   
    input{
        height: 51px;
        width: 327px;
        background-color:#FFFFFF;
        border-radius: 3px;
        border: 1px solid #D4D4D4;
        padding-left:18px;
        ::placeholder{
            margin-left:18px;
            font-family: Roboto;
            font-size: 18px;
            font-style: italic;
            font-weight: 400;
        }
    }
    }
`

export default ContainerComprador;