import React from 'react';
import Link from 'next/link';
import logo from '../img/logo.png';
import adm from '../img/1.jpg';
import nf from '../img/7.jpg';
// import admdora from '../img/2.jpg';
// import gf from '../img/3.jpg';
// import fatura from '../img/4.jpg';
import '../pages_css/areas.css';
 
export default class Header extends React.Component {
    render() {
        return (
            <div className="areas">
                <div className="top">
                    <img src={logo} alt="logo"/>
                    <h1>Nome: Teste</h1>
                    <h1>Ult. Acesso: 22/10/2018 11:32</h1>
                </div>
                <div className="areas-items">
                    <ul>
                        <li>
                            <Link href="./Administracao/principal">
                                <a>
                                    <img src={adm} alt="teste"/>
                                    <span>Administração</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img src={adm} alt="teste"/>
                                    <span>Faturas</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img src={nf} alt="teste"/>
                                    <span>Gestão Financeira</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>
                                    <img src={adm} alt="teste"/>
                                    <span>Nota Fiscal</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
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
}