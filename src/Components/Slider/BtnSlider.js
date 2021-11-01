import React from 'react';
import styled from 'styled-components';
import leftarrow from '../../img/leftarrow.svg';
import rightarrow from '../../img/rightarrow.svg';

function BtnSlider({direction, moveSlide}) {
    console.log(direction, moveSlide);
    return (
        <BtnSliderStyled>
        <button 
        onClick={moveSlide}
        className={direction == "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction == "next" ? rightarrow : leftarrow } />    
        </button>
        </BtnSliderStyled>
    )
}

const BtnSliderStyled = styled.div`
.btn-slide {
    width: 40px;
    height: 40px;
    //margin: -70px;
    border-radius: 50%;
    background: white;
    // border: 1px solid rgba(34, 34, 34, 0.287);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .btn-slide img {
    width: 25px;
    height: 25px;
    pointer-events: none;
  }
  .prev {
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
  }
  .next {
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
  }
  
`;

export default BtnSlider
