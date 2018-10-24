import React from 'react';
import { Navbar, NavbarHeader, PageHeader, Nav, NavItem } from 'react-bootstrap';
import LogoHeader from '../img/logo-header.png';
import LogoAdm from '../img/logo_administracao.png';
import '../css-geral/NavHeader.css';

export default class NavHeader extends React.Component {
    render() {
        return (
            <div>
                <PageHeader id="header" name="header" className="header">
                    <img src={LogoHeader} alt="logo-header" className="img-logo-header"/>
                        <h3>Nível: ---------</h3>
                        <h3>Nome: --------</h3>
                        <h3>Login: ---------</h3>
                    <img src={LogoAdm} alt="logo-adm" className="img-logo-adm"/>
                </PageHeader>
                <Nav bsStyle="tabs" justified className="nav-opt">
                    <NavItem className="nav-opt">Inicio</NavItem>
                    <NavItem className="nav-opt">Áreas</NavItem>
                    <NavItem className="nav-opt">Atualizar</NavItem>
                    <NavItem className="nav-opt">Voltar</NavItem>
                    <NavItem className="nav-opt">Sair</NavItem>
                </Nav>
            </div>
        );
    }
}