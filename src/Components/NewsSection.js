import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts'
import CardNews from './CardNews';
import news from '../img/news.png';
function NewsSection() {
    return (
        <NewsSectionStyled>
                <div className="card-con">
                <CardNews
                newsimg={news}
                title={'haloo'}
                desc={'deskripsi niii'}
                />
                <CardNews
                newsimg={news}
                title={'haloo'}
                desc={'deskripsi niii'}
                />
                <CardNews
                newsimg={news}
                title={'haloo'}
                desc={'deskripsi niii'}
                />
                </div>      
        </NewsSectionStyled>
    )
}
const NewsSectionStyled = styled.section`
    .card-con{
        padding: 30px;
        display: grid;
        height: 600px;
        //background-color: red;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 3rem;
        //padding-top: 7.4rem;
        @media screen and (max-width: 689px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .c-para{
        text-align: center;
    }
`;
export default NewsSection
