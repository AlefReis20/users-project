import styled from 'styled-components'
import Background from '../../assets/background1.svg'



export const Container = styled.div`
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100%;
min-height: 100vh;
`
export const Image = styled.img`
width: 328px;
height: 176px;
margin-top: 30px;
    
`

export const InputLabel = styled.p`
color: #EEE;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 22px; /* 122.222% */
letter-spacing: -0.408px;

margin-left: 25px;
`

export const Input = styled.input`
width: 342px;
height: 58px;
padding: 15px 20px 15px 25px;
margin-bottom: 34px;

border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
border: none;
outline: none;

color: #FFF;
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
`