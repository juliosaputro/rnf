import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton';
import pv3 from '../img/foto1.svg';
import rnflogo2 from '../img/rnflogo2.png';
import { Fade } from 'react-reveal';
export default function HeaderContent() {
    return (
        <HeaderContentStyled>
            <Fade left cascade>
            <div className="left-content">
            <div className="left-text-container">
                <h1>welcome to</h1>
                <img src={rnflogo2} alt="" className="rnflogo2" 
                // style={{backgroundColor:'#243594', height:'35px', borderRadius:'15px', padding: '10px'}} 
                />
                <p className="white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id vehicula nisi. Nullam posuere lectus lorem, a rutrum orci scelerisque porttitor. Mauris aliquet, nisl non placerat molestie, arcu orci semper nunc, sit amet dictum est enim ac orci. Aenean nec sagittis purus, in faucibus sem. Curabitur ut fermentum est. Morbi eu libero pellentesque, mollis est et, ornare tortor.
                </p>
                <SecondaryButton name={'DONATE NOW'}/>
            </div>
            </div>
            </Fade>
            <Fade right>
            <div className="right-content">
                <img src={pv3} alt="" style={{height: '380px'}}/>
            </div>
            </Fade>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
display: grid;
overflow: hidden;
padding-top: 30px;
grid-template-columns: repeat(2, 1fr);
padding-top: 4rem;
margin-right: 10px;
margin-left: 10%;
@media screen and (max-width: 700px){
    grid-template-columns: repeat(1, 1fr);
}
.left-content{
    display: flex;
    align-items: center;
    padding-right: 3rem;
    .white{
        color:white;
    }
    h1{
        font-size: 18px;
        font-weight: 400;
        @media screen and (max-width: 700px){
            font-size: 3rem;
        }
    }
    .rnflogo2{
        background-color: #243594; 
        height: 35px; 
        border-radius: 15px; 
        padding: 10px;
    }
    .white{
        padding: 1.4rem 0;
        line-height: 1.8rem;
        color: #243594
    }
}
.right-content{
    position: relative;
    display: flex;
    justify-content: center;
    .phone{
        width: 80%;
    }
    .ring1{
        position: absolute;
        bottom: 10%;
        right: 0;
        left: auto;
        animation: move2 20s infinite;
        transition: all .4s ease-in-out;
    }
    .message1{
        position: absolute;
        top: 0;
        right: 0;
        left: auto;
        animation: move 5s infinite;
        transition: all .4s ease-in-out;
    }
    .message2{
        position: absolute;
        bottom: 15%;
        left: 0;
        transition: all .4s ease-in-out;
        animation: move 8s infinite;
        animation-delay: .5s;
        transition: all .4s ease-in-out;
    }
}
//Header Animations
.message1{
    @keyframes move{
        0%{
            transform: translateY(0) rotate(0) scale(1) translateX(0);
        }
        50%{
            transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
        }
        100%{
            transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
        }
    }
    @keyframes move2{
        0%{
            transform: translateY(0) rotate(0) scale(1) translateX(0);
        }
        50%{
            transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
        }
        100%{
            transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
        }
    }
}
`;
