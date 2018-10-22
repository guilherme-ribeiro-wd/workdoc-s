import React from 'react';
import { FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faLock, faSignInAlt);

export default class Login extends React.Component {
    state = {
        usuario: '',
        senha: '',
    }

    change = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validaLogin = () => this.state.usuario !== '' && this.state.senha !== '';

    render() {
        return (
            <form className="form-login" onSubmit={this.validaLogin} align="center">
                <FormGroup controlId="user-usuario">
                    <ControlLabel>Usuário</ControlLabel>
                    <FormControl name="usuario" type="text" placeholder="Usuário"
                    value={this.state.usuario} onChange={e => this.change(e)}/>
                <FontAwesomeIcon icon="user" />
                </FormGroup>

                <FormGroup controlId="user-senha">
                  <ControlLabel>Senha</ControlLabel>
                  <FormControl type="password" name="senha" placeholder="Senha"
                  value={this.state.senha} onChange={e => this.change(e)}/>
                  <FontAwesomeIcon icon="lock"/>
                </FormGroup>

                <Button type="button" id="btn-login">Entrar</Button>
                <FontAwesomeIcon icon="sign-in-alt"/>
            </form>
        );
    }
}