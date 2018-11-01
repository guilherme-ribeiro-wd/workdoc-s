import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUsers, faStickyNote, faAddressBook, faCogs, faCog, faArchive, faEnvelope, faUpload, faClipboard } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faUsers, faStickyNote, faAddressBook, 
            faCog, faCogs, faArchive, faEnvelope, faUpload, faClipboard);

class DashHeader extends React.Component {
    render() {
        return (
            <div className="dash_header">
                <FontAwesomeIcon icon={this.props.icon} className="dash_header_icon" />
                <p>{this.props.title}</p>
            </div>
        ); 
    }
}

class DashContentArea extends React.Component {
    render() {
        return (
            <div className="dash_content_area">
                    {/* JUST CSS  */}
            </div> 
        ); 
    }
}

class DashButton extends React.Component {
    render() {
        return (
            <div className="dash_button">
                <Button className="btn_itself" title={this.props.btntitle}>
                    <FontAwesomeIcon icon={this.props.icon} className="dash_icon" />
                </Button>
            </div>
        ); 
    }
}

class DashBoard extends React.Component {
    render() {
        return (
            <div name="all_dash" className="all_dash">
                <div className="dash_complete">
                    <DashHeader title="Cadastros" icon="address-book"/>
                    <DashContentArea />
                    <DashButton icon="user" btntitle="Lista usuários"/>
                    <DashButton icon="users" btntitle="Lista clientes"/>
                </div>

                <div className="dash_complete">
                    <DashHeader title="Relatórios" icon="archive"/>
                    <DashContentArea />
                    <DashButton icon="clipboard" btntitle="Gerar relatório"/>
                    <DashButton icon="envelope" btntitle="Enviar e-mail"/>
                    <DashButton icon="upload" btntitle="Upload arquivo"/>
                </div>

                <div className="dash_complete">
                    <DashHeader title="Configurações" icon="cog"/>
                    <DashContentArea />
                    <DashButton icon="cogs" btntitle="Configurar níveis"/>
                </div>
            </div>
        ); 
    }
}

export default class PrincipalAdministracao extends React.Component {
    render() {
        return (
            <div>
                <DashBoard />
            </div>
        );
    }
}


// DASHBOARD DIVIDIDO EM COMPONENTES.
/* 
    1. header/titulo ex-> CADASTROS
    2. body-content ex-> BOTÕES REFERENTES AOS CADASTROS
    3. botões ex-> CADASTRO CLIENTE
    4. componente completo ex-> header/titulo - body-content - botões
*/