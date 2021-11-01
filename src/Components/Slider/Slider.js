import React, { useState } from 'react';
import styled from 'styled-components';
import BtnSlider from '../Slider/BtnSlider';
import dataSlider from '../Slider/dataSlider';
import pswt from '../../img/pesawat2.svg';

function Slider() {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    return (
        <SliderStyled>
            <div className="started">
                <h1>We Started From This</h1>
            </div>
            <div className="container-slider">
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                            key={obj.id}
                            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                            <img
                                src={process.env.PUBLIC_URL + `/before/before${index + 1}.jpg`}
                            />
                        </div>
                    )
                })}

                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            </div>
            <div className="container-dots">
                {Array.from({ length: 3 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
                <div className="desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod non in tellus morbi aliquam nulla leo integer. Eget in gravida tincidunt pretium ultrices. Eu velit tincidunt imperdiet sed mattis ut sed. Eu a elit vel duis malesuada quam tortor.</p>
                </div>
                <div className="pswt">
                    <img alt="" />
                </div>
               
        </SliderStyled>
    )
}

const SliderStyled = styled.div`
//padding: 100px;
display: flex;
flex-direction: column;
.started{
    text-align: center;
    padding: 20px;
    h1{
        
    }
}
.container-slider {
    max-width: 600px;
    height: 400px;
    margin-left: 300px;
    border-style: solid;
    border-width: 30px;
    border-color: #EDE9DD;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 700px){
    .container-slider {
      margin: 100px 10px 0;
    }
  }
  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity ease-in-out 0.4s;
  }
  .slide img {
    width: 100%;
    height: 100%;
    
    //align-items: center;
    object-fit: cover;
  }
  .active-anim {
    opacity: 1;
  }
  
.container-dots {
    background: #243594;
    margin-top: 600px;
    position: absolute;
    justify-content: center;
    align-items: right;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  }
  .dot {
    background: white;
    justify-content: center;
    width: 10px;
    height: 10px;
    margin: 20px;
    border-radius: 50%;
    border: 3px solid #2A94F4;
    margin: 0 5px;
    background: #2A94F4;
  }
  .dot.active {
    background: #243594;
  }
  .desc{
    background: #2A94F4;
      margin: 5rem;
      margin-left: 20%;
      width: 60%;
      align-items: center;
      justify-content: center;
      .p{
        max-width: 600px;
      }
  }
  .pswt{
    width:100%;
    height: 200px;
    //background-color: red;
    background-image: url(${pswt});
    background-size: 180px;
    background-repeat: no-repeat;
    background-position-x: 50%;
  }
  
`;

export default Slider
