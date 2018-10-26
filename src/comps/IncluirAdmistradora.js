import DadosEndereco from './DadosEndereco';
import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

var $ = require("jquery");
require('jquery-mask-plugin');

library.add(faCheckCircle, faTimesCircle);

const smL = 4;
const smI = 7;

export default class IncluirAdministradoras extends React.Component {
    render() {
        $(document).ready(function($){
            $('#cnpj-adm-cad').mask('99.999.999/9999-99');
            $('#tel-adm-cad').mask('+55 99 9999-9999');
        });
        return (
            <Form horizontal>
                <fieldset>
                    {/* COLOCAR UM ICONE INDICANDO QUE ESTE É O CADASTRO DE ADM. */}
                    <legend>Cadastrar Administradoras</legend>
                    <FormGroup controlId="id-adm-cad">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Cód. Administradora
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="id-adm-cad" type="text" placeholder="Código" maxLength="3" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="nome-adm-cad">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Nome Administradora
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="nome-adm-cad" type="text" placeholder="Nome Administradora" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="razao-adm-cad">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Razão Social
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="razao-adm-cad" type="text" placeholder="Razão Social" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="fant-adm-cad">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Nome Fantasia
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="fant-adm-cad" type="text" placeholder="Nome Fantasia" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="cnpj-adm-cad" className="cnpj_adm_cad">
                        <Col componentClass={ControlLabel} sm={smL}>
                        CNPJ
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="cnpj-adm-cad" type="text" placeholder="__.___.___/____-__" />
                        </Col>
                    </FormGroup>
                    {/* CHAMA O COMPONENTE DADOS DO ENDERECO */}
                    <DadosEndereco />
                    <FormGroup controlId="tel-adm-cad" className="tel_adm_cad">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Telefone
                        </Col>
                        <Col sm={smI}>
                        {/* VALOR VIRIA CARREGADO */}
                        <FormControl name="tel-adm-cad" type="text" placeholder="Telefone" />
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
        );
    }
}