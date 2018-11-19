import React from 'react';
import { PageHeader, Nav, NavItem } from 'react-bootstrap';
import LogoHeader from '../img/logo-header.png';
import LogoAdm from '../img/logo_administracao.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faEllipsisH, faSyncAlt, faReply, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../style/components_css/NavHeader.css';

library.add(faHome, faEllipsisH, faSyncAlt, faReply, faSignOutAlt);

export default class NavHeader extends React.Component {
    render() {
        return (
            <div>
                <PageHeader id="header" name="header" className="header">
                    <img src={LogoHeader} alt="logo-header" className="img-logo-header"/>
                        <p>Nível:{this.props.nivelUsr}</p>
                        <p>Nome: {this.props.nomeUsr}</p>
                        <p>Login: {this.props.loginUsr}</p>
                    <img src={LogoAdm} alt="logo-adm" className="img-logo-adm"/>
                </PageHeader>
                <Nav bsStyle="tabs" justified className="nav-opt">
                    <NavItem className="nav-opt">
                        Inicio
                        <FontAwesomeIcon className="icon-fa" icon="home" />
                    </NavItem>
                    <NavItem className="nav-opt">
                        Áreas
                        <FontAwesomeIcon className="icon-fa" icon="ellipsis-h" />
                    </NavItem>
                    <NavItem className="nav-opt">
                        Att.
                        <FontAwesomeIcon className="icon-fa" icon="sync-alt" />
                    </NavItem>
                    <NavItem className="nav-opt">
                        Voltar
                        <FontAwesomeIcon className="icon-fa" icon="reply" />
                    </NavItem>
                    <NavItem className="nav-opt">
                        Sair
                        <FontAwesomeIcon className="icon-fa" icon="sign-out-alt" />
                    </NavItem>
                </Nav>
            </div>
        );
    }
}