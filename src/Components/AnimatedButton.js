import React from 'react';
import styled from 'styled-components';

function AnimatedButton({name}) {
  return (
    <AnimatedButtonStyled>
      {name}
    </AnimatedButtonStyled>
  )
}

const AnimatedButtonStyled = styled.button`
background-color: var(--dark-primary);
    padding: 1rem 2rem;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    transition: all .4s ease-in-out;
    &:hover{
        transition: all .4s ease-in-out;
        color: var(--accent-pink);
        .blob1{
            transition: all .4s ease-in-out;
            transform: translateX(-100px);
        }
    `;
export default AnimatedButton
