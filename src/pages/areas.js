// AREAS DO SISTEMA
import React from 'react';
import '../pages_css/areas.css';
//
import { Link } from 'react-router-dom';
// IMAGENS
import logo from '../img/logo.png';
import adm from '../img/1.jpg';
import nf from '../img/7.jpg';
// import admdora from '../img/2.jpg';
// import gf from '../img/3.jpg';
// import fatura from '../img/4.jpg';

const Areas = () => {
    return (
        <div className="areas">
            <div className="top">
                <img src={logo} alt="logo"/>
                <h1>Nome: Teste</h1>
                <h1>Ult. Acesso: 22/10/2018 11:32</h1>
            </div>
            <div className="areas_items">
                <ul>
                    <li>
                        <Link to='./Administracao/Principal'>
                            <a>
                                <img src={adm} alt="adm"/>
                                <span>Administração</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to=''>
                            <a>
                                <img src={adm} alt="teste"/>
                                <span>Faturas</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to=''>
                            <a>
                                <img src={nf} alt="teste"/>
                                <span>Gestão Financeira</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to=''>
                            <a>
                                <img src={adm} alt="teste"/>
                                <span>Nota Fiscal</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to=''>
                            <a>
                                <img src={adm} alt="teste"/>
                                <span>Admistradora</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Areas;