import styled from 'styled-components'


export const Button = styled.button`
border-radius: 14px;
background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.80)'};

color: #fff;
font-family: Roboto;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: 74px;

width: 342px;
height: 74px;
border: ${props => props.isBack ? '1px solid #fff' : 'none)'};
cursor: pointer;

display: flex;
justify-content: center;
align-items: center;
gap: 20px;

margin-top: 130px;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}

img{
    transform: ${props => props.isBack && 'rotateY(180deg)'} ;
}
`
