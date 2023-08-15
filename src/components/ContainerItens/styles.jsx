import styled from 'styled-components'

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
padding: 50px 36px;

height: 100%;

width: 414px;

border-radius: 61px 61px 0px 0px;

background: linear-gradient(135deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.60) 0.01%, rgba(255, 255, 255, 0.15) 100%);

${props => props.isBlur && `
    backdrop-filter: blur(22.5px);
    min-height: calc(100vh - 170px);
`}

`