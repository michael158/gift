import React from 'react';

import Button from 'react-bootstrap/Button'
import Moment from 'react-moment';

import { FaHeart } from 'react-icons/fa';

import Heart from './../../assets/img/heart.png';
import Gift from './../../assets/pdf/gift.pdf';

import 'moment-timezone';
import './index.css'


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

            <h2 className="big">Dica do dia: "Ser exigente na escolha do parceiro não é nada mais que respeito próprio"</h2>
            <h2 className="relax">Thiago Rivero | Gabriella Dias</h2>
            
            {/* <div className="container-click">
                <FaHeart/>
                    <h2 className="click">Clica aqui em baixo</h2>
                <FaHeart/>
            </div>
            
            <div className="container-button">
                <a href={Gift} className="btn btn-primary" target="_blank">AQUI MESMO! <FaHeart/></a>
            </div> */}

            <div className="copyright">
                Copyright © <Moment tz="America/Fortaleza" format="DD/MM/YYYY" date={new Date()} /> Thiago Rivero 
            </div>
        </div>
    )
}