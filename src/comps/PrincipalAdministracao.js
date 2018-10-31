import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faUsers, faStickyNote, faAddressBook } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faUsers, faStickyNote, faAddressBook);

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
                <Button className="btn_itself">
                    <FontAwesomeIcon icon={this.props.icon} className="dash_icon" />
                </Button>
            </div>
        ); 
    }
}

class DashBoard extends React.Component {
    render() {
        return (
            <div className="dash_complete">
                <DashHeader title="Cadastro" icon="address-book"/>
                <DashContentArea />
                <DashButton icon="user" />
                <DashButton icon="users" />
                <DashButton icon="user" />
                <DashButton icon="users" />
                <DashButton icon="user" />
                <DashButton icon="users" />
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