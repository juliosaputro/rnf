import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from './AnimatedButton';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg';
import bgtop from '../img/bgtop.svg';
import { Fade } from 'react-reveal';

export default function Navigation() {

    return (
        <NavigationStyled >
            <ul>
                <li>
                    <h3 href="">ABOUT US</h3>
                </li>
                <li>
                    <h3 href="">PILLARS&PROGRAM</h3>
                </li>
                <li>
                    <h3 href="">REPORT</h3>
                </li>
                <li>
                    <h3 href="">MEDIA</h3>
                </li>
                <li>
                    <h3 href="">JOIN US</h3>
                </li>
                <li>
                <PrimaryButton name={'Sign Up'} />
                </li>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.div`
    position:fixed;
    overflow: hidden;
    top: 0;
    margin:0;
    display: flex;
    width: 100%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;
    background-image: url(${bgtop});
    background-repeat: no-repeat;
    background-position-x: 50%;

    ul {
        list-style-type: none;
        background-image: url(${bgtop});
        background-repeat: no-repeat;
    background-position-x: 50%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
        position: fixed;
        min-height: 10vh;
        width: 96.8%;
            display: flex;
            justify-content: space-between;
            // padding-left: 30px;
            // padding-right: 30px;


            li{
                padding-left: 30px;
                padding-right: 30px;
                list-style-type: none;
                display: flex;
                justify-content: space-between;
                h3{
                    color: white;
                   
                }
            }
      }

`;
