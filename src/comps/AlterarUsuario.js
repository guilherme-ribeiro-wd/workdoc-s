import React from 'react';
import {
    FormControl, FormGroup, ControlLabel, Button, Col, Form, Radio, Checkbox
} from 'react-bootstrap';
var $ = require("jquery");
require('jquery-mask-plugin');

const smL = 4;
const smI = 7;

export default class AlterarUsuario extends React.Component {
    constructor(props) {
        super(props);
    }
    // PAROU AQUI!!!!
    render() {
        $(document).ready(function($) {
            $('#dtnasc-user').mask('99/99/9999'); // FUNÇÃO VALIDA DATA - TODO
        });

        return (
                <Form horizontal>
                    <fieldset>
                        <legend>Alterar Dados Usuario</legend>
                        <FormGroup controlId="nome-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Nome
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="nome-user" type="text" placeholder="Nome completo" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="dtnasc-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Data Nasc.
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="dtnasc-user" type="text" placeholder=""/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="periodo-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            CPF
                            </Col>
                            <Col sm={smI}>
                            <FormControl id="inicioper-user" type="text" placeholder="Ínicio"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="depto-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            CEP
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="depto-user" type="text" placeholder="Departamento"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="login-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Endereço
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="login-user" type="text" placeholder="Login"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="senha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Número
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="senha-user" type="password" placeholder="Senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="confsenha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Complemento
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="confsenha-user" type="password" placeholder="Confirme a senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="confsenha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Complemento
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="confsenha-user" type="password" placeholder="Confirme a senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="confsenha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Complemento
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="confsenha-user" type="password" placeholder="Confirme a senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="confsenha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Complemento
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="confsenha-user" type="password" placeholder="Confirme a senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="confsenha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Complemento
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="confsenha-user" type="password" placeholder="Confirme a senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="confsenha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Complemento
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="confsenha-user" type="password" placeholder="Confirme a senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="confsenha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Complemento
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="confsenha-user" type="password" placeholder="Confirme a senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="confsenha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Complemento
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="confsenha-user" type="password" placeholder="Confirme a senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="confsenha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Complemento
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="confsenha-user" type="password" placeholder="Confirme a senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="atvdia-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Ativo?
                            </Col>
                            <Radio name="radioGroup" inline checked>
                                Sim
                            </Radio>{' '}
                            <Radio name="radioGroup" inline>
                                Não
                            </Radio>
                        </FormGroup>
                        <FormGroup controlId="id-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Cód. Usuário
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="id-user" type="text" placeholder="" disabled={true}  />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="login-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Login
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="login-user" type="text" placeholder="Login"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="senha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Senha
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="senha-user" type="password" placeholder="Senha"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="confsenha-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Conf. Senha
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="confsenha-user" type="password" placeholder="Confirme a senha"/>
                            </Col>
                        </FormGroup>
                        {/* ICONE NO BOTÃO - TODO */}
                        <FormGroup>
                            <Col smOffset={5} sm={smI}>
                            <Button type="submit">Confirmar Cadastro</Button> 
                            </Col>
                        </FormGroup>
                    </fieldset>
                </Form>
        )
    }
}