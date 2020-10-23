import React from 'react';

import './index.css'

import Button from 'react-bootstrap/Button'

import { FaHeart } from 'react-icons/fa';

import Heart from './../../assets/img/heart.png';
import Gift from './../../assets/pdf/gift.pdf';



export default function Home()
{


    return (
        <div className="Home">
            <div className="loveName" style={{
                backgroundImage: `url(${Heart})`
            }}>
                <p>Gabriella</p>
                <p>Dias</p>
            </div>

            <h2 className="big">Passando pra lembrar o quão PEPEKUDA TU É!!!</h2>
            <h2 className="relax">Precisando de uma RELAXADA?</h2>
            
            <div className="container-click">
                <FaHeart/>
                    <h2 className="click">Clica aqui em baixo</h2>
                <FaHeart/>
            </div>
            
            <div className="container-button">
                <a href={Gift} className="btn btn-primary" target="_blank">AQUI MESMO! <FaHeart/></a>
            </div>

            <dic className="copyright">
                Copyright © 23/10/2020 Thiago Rivero 
            </dic>
        </div>
    )
}