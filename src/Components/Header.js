import React from 'react'
import styled from 'styled-components';
import bg from '../img/logo2.svg'
import HeaderContent from './HeaderContent';
import Navigation from './Navigation';


function Header() {
    return (
        <HeaderStyled>
                <Navigation />
            <div className="header-content">
                <HeaderContent />
            </div>

        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
height: 158vh;
width: 100%;
overflow: hidden;
background-image: url(${bg});
background-repeat: no-repeat;
background-size: cover;
background-position-x: 40%;
.header-content{
     padding-top: 2rem;
//     @media screen and (max-width: 1347px){
//         padding: 5rem 14rem;
//     }
//     @media screen and (max-width: 1186px){
//         padding: 5rem 8rem;
//     }
//     @media screen and (max-width: 990px){
//         padding: 5rem 4rem;
//     }
}
`;

export default Header;
