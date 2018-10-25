import { Estados as estados } from '../estados';
import DadosEndereco from './DadosEndereco';
import DadosContTrab from './DadosContTrab';
import React from 'react';
import {
    FormControl, FormGroup, ControlLabel, Button, Col, Form, Radio
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

var $ = require("jquery");
require('jquery-mask-plugin');

library.add(faCheckCircle, faTimesCircle);
const smL = 4;
const smI = 7;

export default class AlterarUsuario extends React.Component {
    constructor(props) {
        super(props);
    }

    estadosOption(estados) {
        const options = [];
        for (let i = 0; i < estados.length; i++) {
            options.push(<option key={i} value={estados[i]}>{estados[i]}</option>);
        }
        return options;
    };

    render() {
        $(document).ready(function($) {
            $('#dtnasc-user-alt').mask('99/99/9999'); // FUNÇÃO VALIDA DATA - TODO
            $('#cpf-user-alt').mask('999.999.999-99'); // FUNÇÃO VALIDA CPF - TODO
            $('#tel-user-alt').mask('+55 99 99999-9999'); 
        });

        return (
                <Form horizontal>
                    <fieldset>
                        <legend>Alterar Dados Usuario</legend>
                        {/* FOTO DO USUARIO */} {/* VALOR VIRIA CARREGADO */}
                        <FormGroup controlId="nome-user-alt">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Nome
                            </Col>
                            <Col sm={smI}>
                            {/* VALOR VIRIA CARREGADO */}
                            <FormControl name="nome-user-alt" type="text" placeholder="Nome completo" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="dtnasc-user-alt" className="dtnasc">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Data Nasc.
                            </Col>
                            <Col sm={smI}>
                            {/* VALOR VIRIA CARREGADO */}
                            <FormControl name="dtnasc-user-alt" type="text" placeholder="DD/MM/AAAA"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="cpf-user-alt">
                            <Col componentClass={ControlLabel} sm={smL}>
                            CPF
                            </Col>
                            <Col sm={smI}>
                            <FormControl id="cpf-user-alt" type="text" placeholder="CPF"/>
                            </Col>
                        </FormGroup>
                        {/* CHAMA O COMPONENTE DADOS ENDEREÇO */}
                        < DadosEndereco />
                        {/* CHAMA O COMPONENTE DADOS CONT TRAB */}
                        <DadosContTrab />
                        <FormGroup controlId="ativo-user-alt" className="ativo">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Ativo?
                            </Col>
                            <Radio name="radio" inline checked>
                                Sim
                            </Radio>
                            <Radio name="radio" inline>
                                Não
                            </Radio>
                        </FormGroup>
                        <FormGroup controlId="login-user-alt">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Login
                            </Col>
                            <Col sm={smI}>
                            {/* VALOR VIRIA CARREGADO */}
                            <FormControl name="login-user-alt" type="text" placeholder="Login"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="senha-user-alt">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Senha
                            </Col>
                            <Col sm={smI}>
                            {/* VALOR VIRIA CARREGADO */}
                            <FormControl name="senha-user-alt" type="password" placeholder="Senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="confsenha-user-alt" className="conf-senha">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Conf. Senha
                            </Col>
                            <Col sm={smI}>
                            {/* VALOR VIRIA CARREGADO */}
                            <FormControl name="confsenha-user-alt" type="password" placeholder="Confirme a senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="btnAlt">
                            <Col smOffset={5} sm={smI}>
                            <Button type="submit" className="btn-alt">Gravar</Button> 
                            </Col>
                            <FontAwesomeIcon icon="check-circle" className="icon-check"/>
                        </FormGroup>
                        <FormGroup controlId="btnCancel">
                            <Col smOffset={5} sm={smI}>
                            <Button type="submit" className="btn-cancel">Cancelar</Button> 
                            </Col>
                            <FontAwesomeIcon icon="times-circle" className="icon-cancel"/>
                        </FormGroup>
                    </fieldset>
                </Form>
        )
    }
}