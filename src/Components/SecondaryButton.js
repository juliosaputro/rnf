import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'
export default function SecondaryButton({name}) {
    return (
        <SecondaryButtonStyled>
            {name}
            <img src={arrow} alt="" />
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = styled.button `
background-color: #16194F;
padding: .6rem 2rem;
font-family: inherit;
font-size: inherit;
color: white;
border-radius: 20px;
outline: none;
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: space-between;

img{
    padding-left: .9rem
}
`;