import React from 'react';
import {Form, Col, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
var $ = require("jquery");
require('jquery-mask-plugin');


library.add(faArrowRight, faTimesCircle);

const smL = 4;
const smI = 7;

export default class CadastroCliente extends React.Component {
    render() {
        $(document).ready(function($) {
            $('#cnpj-cliente').mask('99.999.999/9999-99');
        });
        return (
            <Form horizontal> 
                <fieldset>
                    <legend>Cadastrar Cliente</legend>
                    <FormGroup controlId="id-cliente">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Cód. Cliente
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="id-cliente" type="text" placeholder="Código" maxLength="3"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="razao-cliente">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Razão Social
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="razao-cliente" type="text" placeholder="Razão Social" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="fant-cliente">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Nome Fantasia
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="fant-cliente" type="text" placeholder="Nome Fantasia" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="cnpj-cliente" className="cnpj_cliente">
                        <Col componentClass={ControlLabel} sm={smL}>
                        CNPJ
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="cnpj-cliente" type="text" placeholder="__.___.___/____-__" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="btnAvancar">
                        <Col smOffset={5} sm={smI}>
                        <Button type="submit" className="btn-avan-cli">Avançar</Button>
                        <FontAwesomeIcon icon="arrow-right" className="icon-arrow-cli"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="btnCancel">
                        <Col smOffset={5} sm={smI}>
                        <Button type="submit" className="btn-cancel-cli">Cancelar</Button> 
                        </Col>
                        <FontAwesomeIcon icon="times-circle" className="icon-cancel-cli"/>
                    </FormGroup>
                </fieldset>
            </Form>
        )
    }
}