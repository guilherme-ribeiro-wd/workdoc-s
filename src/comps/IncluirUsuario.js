import React from 'react';
import {
    FormControl, FormGroup, ControlLabel, Button, Col, Form, Radio, Checkbox
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
var $ = require("jquery");
require('jquery-mask-plugin');

library.add(faCheckCircle, faTimesCircle);

const smL = 4;
const smI = 7;

export default class CadastroUsuario extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        $(document).ready(function($) {
            $('#dtnasc-user').mask('99/99/9999'); // FUNÇÃO VALIDA DATA - TODO
        });

        return (
                <Form horizontal>
                    <fieldset>
                        {/* COLOCAR ICONE INDICANDO QUE É O CADASTRO DE USUARIO */}
                        <legend>Cadastrar Usuario</legend>
                        {/* FOTO DO USUARIO */}
                        <FormGroup controlId="id-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Cód. Usuário
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="id-user" type="text" placeholder="" disabled={true}  />
                            </Col>
                        </FormGroup>
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
                            <FormControl name="dtnasc-user" type="text" placeholder="DD/MM/AAAA"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="periodo-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Período
                            </Col>
                            <Col sm={smI}>
                            <FormControl id="inicioper-user" type="text" placeholder="Ínicio"/>
                            </Col>
                            <p id="texto">à</p>
                            <Col sm={smI}>
                            <FormControl id="terminoper-user" type="text" placeholder="Término"/>
                            </Col> 
                        </FormGroup>
                        <FormGroup controlId="depto-user" className="depto-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Departamento
                            </Col>
                            <Col sm={smI}>
                            <FormControl name="depto-user" type="text" placeholder="Departamento"/>
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
                        <FormGroup controlId="atvdia-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                            Preencher atividade diária?
                            </Col>
                            <Radio name="radio" inline checked>
                                Sim
                            </Radio>{' '}
                            <Radio name="radio" inline>
                                Não
                            </Radio>
                        </FormGroup>
                        <FormGroup controlId="nivel-user" className="nivel-user">
                            <Col componentClass={ControlLabel} sm={smL}>
                                Nível de acesso
                            </Col>
                            <Checkbox inline>Administrador Depósito</Checkbox> 
                            <Checkbox inline>Atendente</Checkbox>
                            <Checkbox inline className="chk-gc">Gerente Cliente</Checkbox><br/>
                            <Col componentClass={ControlLabel} sm={smL}>
                            </Col>
                            <Checkbox inline>Contabilidade</Checkbox>
                            <Checkbox inline className="chk-ui">Usuário Indexação</Checkbox>
                            <Checkbox inline className="chk-ue">Usuário Expedição</Checkbox><br/>
                            <Col componentClass={ControlLabel} sm={smL}>
                            </Col>
                            <Checkbox inline>Digitador</Checkbox>
                            <Checkbox inline className="chk-uc">Usuário Cliente</Checkbox>
                            <Checkbox inline className="chk-uimg">Usuário Imagem</Checkbox><br/>
                            <Col componentClass={ControlLabel} sm={smL}>
                            </Col>
                            <Checkbox inline>Usuário Recepção</Checkbox>
                        </FormGroup>
                        <FormGroup controlId="btnCadastrar">
                            <Col smOffset={5} sm={smI}>
                            <Button type="submit" className="btn-conf-cad">Cadastrar</Button>
                            <FontAwesomeIcon icon="check-circle" className="icon-check-cad"/>
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="btnCancel">
                            <Col smOffset={5} sm={smI}>
                            <Button type="submit" className="btn-cancel-cad">Cancelar</Button> 
                            </Col>
                            <FontAwesomeIcon icon="times-circle" className="icon-cancel-cad"/>
                        </FormGroup>
                    </fieldset>
                </Form>
        )
    }
}