import {Estados as estados} from '../estados';
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
            $('#dtnasc-user').mask('99/99/9999'); // FUNÇÃO VALIDA DATA - TODO
            $('#cpf-user').mask('999.999.999-99'); // FUNÇÃO VALIDA CPF - TODO
            $('#cep-user').mask('99999-999'); // FUNÇÃO BUSCA CEP - TODO
            $('#tel-user').mask('+55 99 99999-9999'); // FUNÇÃO BUSCA CEP - TODO
        });

        return (
                <Form horizontal>
                    <fieldset>
                        <legend>Alterar Dados Usuario</legend>
                        {/* FOTO DO USUARIO */} {/* VALOR VIRIA CARREGADO */}
                        <FormGroup controlId="nome-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Nome
                            </Col>
                            <Col sm={smI}>
                            {/* VALOR VIRIA CARREGADO */}
                            <FormControl name="nome-user" type="text" placeholder="Nome completo" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="dtnasc-user" className="dtnasc">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Data Nasc.
                            </Col>
                            <Col sm={smI}>
                            {/* VALOR VIRIA CARREGADO */}
                            <FormControl name="dtnasc-user" type="text" placeholder="DD/MM/AAAA"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="cpf-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            CPF
                            </Col>
                            <Col sm={smI}>
                            <FormControl id="cpf-user" type="text" placeholder="CPF"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="cep-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            CEP
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="cep-user" type="text" placeholder="CEP"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="ender-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Endereço
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="ender-user" type="text" placeholder="Endereço"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="numender-user" className="num-ender">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Número
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="numender-user" type="text" placeholder="Número"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="comple-user" className="comple-ender">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Complemento
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="comple-user" type="text" placeholder="Complemento"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="bairro-user" className="bairro">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Bairro
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="bairro-user" type="text" placeholder="Bairro"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="cidade-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Cidade
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="cidade-user" type="text" placeholder="Cidade"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="estado-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Estado
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="estado-user" componentClass="select">
                                <option value="Selecione...">Selecione...</option>
                                {this.estadosOption(estados)}
                            </FormControl>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="tel-user" className="tel">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Telefone
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="tel-user" type="tel" placeholder="Telefone"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="nextel-user" className="nextel">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Nextel
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="nextel-user" type="tel" placeholder="Nextel"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="fb-user" className="fb">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Facebook.com/
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="fb-user" type="text" placeholder="Facebook"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="email-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Email
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="email-user" type="email" placeholder="Email"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="codcentro-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Cód. Centro Custo
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="codcentro-user" type="text" placeholder="Código Centro de Custo"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="cargo-user" className="cargo">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Cargo
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="cargo-user" type="text" placeholder="Cargo"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="depto-user" className="depto">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Departamento
                            </Col>
                            <Col sm={smI}>
                            {/* VALOR VIRIA CARREGADO */}
                            <FormControl name="depto-user" type="text" placeholder="Departamento"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="ativo-user" className="ativo">
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
                        <FormGroup controlId="login-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Login
                            </Col>
                            <Col sm={smI}>
                            {/* VALOR VIRIA CARREGADO */}
                            <FormControl name="login-user" type="text" placeholder="Login"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="senha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Senha
                            </Col>
                            <Col sm={smI}>
                            {/* VALOR VIRIA CARREGADO */}
                            <FormControl name="senha-user" type="password" placeholder="Senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="confsenha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Conf. Senha
                            </Col>
                            <Col sm={smI}>
                            {/* VALOR VIRIA CARREGADO */}
                            <FormControl name="confsenha-user" type="password" placeholder="Confirme a senha"/>
                            </Col>
                        </FormGroup>
                        {/* ICONE NO BOTÃO - TODO */}
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