import React from 'react'
import styled from 'styled-components';
import bgteam from '../img/bgteam.svg';
import Slider from 'react-slick';
import TeamSlider from '../Components/TeamSlider';
function Team() {
    return (
        <TeamStyled>
            <div className="title">
                <h1>Meet Our Team</h1>
            </div>
            <TeamSlider />
        </TeamStyled>
    )
}

const TeamStyled = styled.div`
height: 600px;
background-color: red;
background-color: blue;
background: url(${bgteam});
background-repeat: repeat-x;
background-size: 100%;
background-position-y: -40%;

.title{
    h1{
        margin: 0;
        padding-top: 4rem;
        text-align: center;
        color: white;
    }
}
`;

export default Team
