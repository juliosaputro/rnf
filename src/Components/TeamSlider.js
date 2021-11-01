import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import styled from 'styled-components';
import 'react-slideshow-image/dist/styles.css'


function TeamSlider() {
  const style = {
    textAlign: 'center',
    //background: 'teal',
    padding: '60px',
    fontSize: '17px',
    width: '200px',
    color: '#243594',
  };

  const properties = {
    duration: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    indicators: false,
  };
  const image = [
    '/team/team1.png',
    '/team/team2.png',
    '/team/team3.png',
    '/team/team1.png',
    '/team/team2.png',
    '/team/team3.png',
  ]
  return (
    <TeamSliderStyled>
      <div className="slider1">
        <div className="slider2">
          <Slide {...properties}>
            <div style={style}>
              <img src={image[0]} style={{ height: 200, backgroundColor: '#F2C938', borderRadius: '50%', }} />
              <h4>Ratih Prativi Negara</h4>
              <h6>Executive Director</h6>
            </div>
            <div style={style}>
              <img src={image[1]} style={{ height: 200, backgroundColor: '#F2C938', borderRadius: '50%', }} />
              <h4>Fathia Ardiza</h4>
              <h6>Office Manager</h6>
            </div>
            <div style={style}>
              <img src={image[2]} style={{ height: 200, backgroundColor: '#F2C938', borderRadius: '50%', }} />
              <h4>Prasiddha Santika</h4>
              <h6>Strategic Bussines & Outreach Manager</h6>
            </div>
            <div style={style}>
              <img src={image[0]} style={{ height: 200, backgroundColor: '#F2C938', borderRadius: '50%', }} />
              <h4>Ratih Prativi Negara</h4>
              <h6>Executive Director</h6>
            </div>
            <div style={style}>
              <img src={image[1]} style={{ height: 200, backgroundColor: '#F2C938', borderRadius: '50%', }} />
              <h4>Fathia Ardiza</h4>
              <h6>Office Manager</h6>
            </div>
            <div style={style}>
              <img src={image[2]} style={{ height: 200, backgroundColor: '#F2C938', borderRadius: '50%', }} />
              <h4>Prasiddha Santika</h4>
              <h6>Strategic Bussines & Outreach Manager</h6>
            </div>
          </Slide>
        </div>
      </div>
    </TeamSliderStyled>
  )
}

const TeamSliderStyled = styled.div`
//width: 600px;
align-items: center;
justify-content: center;
padding: 20px 100px ;
//background-color: yellow;



`;
export default TeamSlider
