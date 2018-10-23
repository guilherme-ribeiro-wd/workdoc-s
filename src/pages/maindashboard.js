import React from 'react';
import Link from 'next/link';
import logo from '../img/logo.png';
import iTeste from '../img/1.jpg';
import './maindashboard.css';
 
export default class Header extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="top">
                    <img src={logo} alt="logo"/>
                    <h1>Nome: Teste</h1>
                    <h1>Ult. Acesso: 22/10/2018 11:32</h1>
                </div>
                <div className="dashboard-items">
                    <ul>
                        <li>
                            <Link href="./Administracao/principal">
                                <a>
                                    <img src={iTeste} alt="teste"/>
                                    <span>Administração</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img src={iTeste} alt="teste"/>
                                    <span>Faturas</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img src={iTeste} alt="teste"/>
                                    <span>Gestão Financeira</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img src={iTeste} alt="teste"/>
                                    <span>Nota Fiscal</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img src={iTeste} alt="teste"/>
                                    <span>Admistradora</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}