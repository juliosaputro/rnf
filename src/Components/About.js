import React from 'react';
import styled from 'styled-components';
import roundright from '../img/roundright.svg';
import roundleft from '../img/roundleft.svg';
import pesawat from '../img/pesawat.svg';
function About() {
    return (
        <AboutStyled>
            <div className='roundleft' />
            <div className='about'>
                <h1>ABOUT US</h1>
                <p>Red Nose Foundation (RNF) is a non-profit organization that
                    focuses on arts, education, and personal development based in Jakarta, Indonesia. Established in 2008, we work to empower underprivileged children, youth, and the communities in which they reside in reaching their dreams and improving their quality of life. RNF currently runs several different program for children, parents, teachers, and local communities in our two learning centers located in Cilincing, North Jakarta, and Jurangmangu, Bintaro. With the gender-based approach applies in all of our programs, we are hoping that our beneficiaries can be optimized their potential without gender limitation.</p>
                <button>Read more</button>
            </div>
            <div className='roundright' />
        </AboutStyled>
    )
}

const AboutStyled = styled.div`
// background-color: blue;
height: 700px;
margin-top: 4rem;
display:flex;
.roundleft{
    width:21%;
    // background-color: red;
    background-image: url(${roundleft});
    background-size: 120px;
    background-repeat: no-repeat;
    background-position-x: -5%;
}

.about{
    padding: 7%;
    justify-content: center;
    background-image: url(${pesawat});
    background-size: 180px;
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 95%;
    width: 70%;
    padding-top:10%;
    h1{
        text-align: center;
    }
}

.roundright{
    width:21%;
    // background-color: red;
    background-image: url(${roundright});
    background-size: 120px;
    background-repeat: no-repeat;
    background-position-y: 90%;
    background-position-x: 100%;
}
`;

export default About
