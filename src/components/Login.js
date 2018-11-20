import React from 'react';
import logo from '../img/logo.png'
import { FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faLock, faSignInAlt);

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            usuario: '',
            senha: '',
            path: '',
        }
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validaLogin = () => this.state.usuario !== '' && this.state.senha !== '';

    error = () => {
        if (this.validaLogin()) {
            this.setState({path: '/areas'});
        } else {
            // alert('error!');
        }
    }

    render() {
        return (
            <div name="login" className="login">
                <img src={logo} alt="logo" className="logo_login" />
                <form className="form-login" align="center">
                    <FormGroup controlId="user-usuario" className="user_usuario">
                        <ControlLabel>Usuário</ControlLabel>
                        <FormControl name="usuario" className="usuario_login" type="text" placeholder="Usuário"
                        value={this.state.usuario} onChange={e => this.changeHandler(e)}/>
                    <FontAwesomeIcon icon="user" className="icon_user"/>
                    </FormGroup>

                    <FormGroup controlId="user-senha" className="user_senha">
                    <ControlLabel>Senha</ControlLabel>
                    <FormControl type="password" name="senha" className="senha_login" placeholder="Senha"
                    value={this.state.senha} onChange={e => this.changeHandler(e)}/>
                    <FontAwesomeIcon icon="lock" className="icon_pwd"/>
                    </FormGroup>
                    {/* BUG POIS QUANDO O PATH É SETADO PARA ALGUM VALOR, ELE NECESSITA DE OUTRO CLICK */}
                    {/* <Link to={this.state.path}> */}
                    <Link to='/areas'>
                        <Button type="button" id="btn-login" 
                        className="btn_login" onClick={this.error}>
                        Entrar
                        </Button>
                    </Link>
                    <FontAwesomeIcon icon="sign-in-alt" className="icon_signin"/>
                </form>
            </div>
        );
    }
}