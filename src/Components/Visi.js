import React from 'react';
import styled from 'styled-components';


function Visi() {
    return (
        <VisiStyled>
            <div className="visimisi">
                <VisiCard>
                    <h1 className="title">
                        Our Vision
                    </h1>
                    <ul>
                        <li>Support children and youth
                            to become individuals with
                            life goals</li>
                        <li>Equip them with skills and
                            ability to achieve it</li>
                        <li>Become positive contributors
                            for communities</li>
                    </ul>
                </VisiCard>
                <VisiCard>
                    <h1 className="title">
                        Our Mision
                    </h1>
                    <ul>
                        <li>Promote the empowerment of children
                            and youth through circus arts and healthy lifestyle</li>
                        <li>Support the educational and personal
                            development of children and youth in
                            underprivileged circumstances</li>
                        <li>Offers a safe place for children to explore, experiment, and be educated</li>
                        <li>Promote gender mainstreaming and positive parenting to parent, teachers, as children and youth support system </li>
                    </ul>
                </VisiCard>
            </div>
        </VisiStyled>
    )
}

const VisiStyled = styled.div`
.visimisi{
    padding: 5rem;
    display: grid;
    height: 500px;
    background-color: #F2C938;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;
    //padding-top: 7.4rem;
    @media screen and (max-width: 689px){
        grid-template-columns: repeat(1, 1fr);
    }
}

.title{
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
const VisiCard = styled.div`
background-color: #FFFFFF;
padding: 2rem 1rem;
border-radius: 50px;
box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
`;

export default Visi
