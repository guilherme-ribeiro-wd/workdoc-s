// CADASTRA UM CONATO DE UM CLIENTE
import React from 'react';
import {Form, ControlLabel, FormGroup, FormControl, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

var $ = require("jquery");
require('jquery-mask-plugin');

library.add(faCheckCircle, faTimesCircle);
const smL = 4;
const smI = 7;

export default class IncluirContatoCliente extends React.Component {
    render() {
        $(document).ready(function($){
            $('#tel-cad-cont').mask('+55 99 9999-9999');
        }); 
        return (
            <Form horizontal>
                <fieldset>
                    {/* COLOCAR INCONE INDICANDO QUE É CADASTRO DE CONTATO DO CLIENTE */}
                    <legend>Cadastrar Contato Cliente</legend>
                    <FormGroup controlId="idcli-cad-cont">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Cód. Cliente
                        </Col>
                        <Col sm={smI}>
                        {/* VALOR VIRIA CARREGADO */}
                        <FormControl name="idcli-cad-cont" type="text" placeholder="" disabled="true"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="idcont-cad-cont">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Cód. Contato
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="idcont-cad-cont" type="text" placeholder="Contato" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="nome-cad-cont">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Nome
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="nome-cad-cont" type="text" placeholder="Nome" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="email-cad-cont">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Email
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="email-cad-cont" type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="tel-cad-cont">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Telefone
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="tel-cad-cont" type="tel" placeholder="Telefone" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="area-cad-cont">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Área Responsável
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="area-cad-cont" type="text" placeholder="Área Responsável" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="cargo-cad-cont" className="cargo_cad_cont">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Cargo
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="cargo-cad-cont" type="text" placeholder="Cargo" />
                        </Col>
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
        );
    }
}