import styled from 'styled-components'
import Background from '../../assets/background2.svg'



export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

height: 100%;
width: 100%;
min-height: 100vh;
`


export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
padding: 50px 36px;

height: 100%;
min-height: calc(100vh - 170px);

border-radius: 61px 61px 0px 0px;

background: linear-gradient(135deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.60) 0.01%, rgba(255, 255, 255, 0.15) 100%);
backdrop-filter: blur(22.5px);

`

export const Image = styled.img`
width: 328px;
height: 176px;
margin-top: 30px;
    
`

export const User = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 342px;
    height: 58px;

    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;

    margin-top: 20px;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #FFF;
    }
    
    button {
            background: none;
            border: none;
            cursor: pointer;
    }
`
