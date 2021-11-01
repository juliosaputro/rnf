import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import news from '../img/news.png'
function CardNews({title, newsimg, desc}) {
    return (
        <CardNewsStyled>
           <div className="news-image">
                <img src={newsimg} alt="" />
            </div>
            <h4 className="news-title">
                {title}
            </h4>
            <p className="news-desc">
                {desc}
            </p>
        </CardNewsStyled>
    )
}

const CardNewsStyled = styled.div`
//background-color: blue;
padding: 2rem 1rem;
border-radius: 50px;
box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
.news-title{
    font-size: 1.5rem;
    color: #000;
    text-align: center;
    span{
        font-size: 1.5rem;
    }
}
.news-desc{
    font-size: 1rem;
    color: #000;
    text-align: left;
    span{
        font-size: 1.5rem;
    }
}
.news-image{
    display: flex;
    justify-content: center;
    img{
        width: 65%;
    }
}
.plan-con{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    img{
        padding: 0 .3rem;
    }
}
.text-check{
    display: flex;
    align-items: center;
    padding: .4rem 0;
    img{
        padding-right: .3rem;
        width: 24px;
    }
    &:nth-child(6){
        color: #B7B7B7;
    }
    &:nth-child(7){
        color: #B7B7B7;
    }
    &:nth-child(8){
        color: #B7B7B7;
    }
}

`;

export default CardNews
