import DadosEndereco from './DadosEndereco';
import DadosContatoCli from './DadosContatoCli';
import React from 'react';
import {Form, Col, FormGroup, FormControl, ControlLabel, Radio, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
var $ = require("jquery");
require('jquery-mask-plugin');
library.add(faCheckCircle, faTimesCircle);
const smL = 4;
const smI = 7;

export default class AlterarCliente extends React.Component {
    estadosOption(estados) {
        const options = [];
        for (let i = 0; i < estados.length; i++) {
            options.push(<option key={i} value={estados[i]}>{estados[i]}</option>);
        }
        return options;
    };
    render() {
        $(document).ready(function($) {
            $('#cnpj-cliente-alt').mask('99.999.999/9999-99'); // FUNÇÃO VALIDAD CNPJ - TODO
            $('#cep-cliente-alt').mask('99999-999'); // FUNÇÃO BUSCA CEP - TODO
            $('#tel-cliente-alt').mask('+55 99 9999-9999'); 
        });
        return (
            <Form horizontal>
                <fieldset>
                    <legend>Aterar Dados Cliente</legend>
                    <FormGroup controlId="id-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Cód. Cliente
                        </Col>
                        <Col sm={smI}>
                        {/* VALOR VIRIA CARREGADO */}
                        <FormControl name="id-cliente-alt" type="text" placeholder="" disabled="true"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="razao-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Razão Social
                        </Col>
                        <Col sm={smI}>
                         {/* VALOR VIRIA CARREGADO */}
                        <FormControl name="razao-cliente-alt" type="text" placeholder="Razão Social" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="fant-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Nome Fantasia
                        </Col>
                        <Col sm={smI}>
                         {/* VALOR VIRIA CARREGADO */}
                        <FormControl name="fant-cliente-alt" type="text" placeholder="Nome Fantasia" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="cnpj-cliente-alt" className="cnpj_cliente_alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        CNPJ
                        </Col>
                        <Col sm={smI}>
                         {/* VALOR VIRIA CARREGADO */}
                        <FormControl name="cnpj-cliente-alt" type="text" placeholder="__.___.___/____-__" />
                        </Col>
                    </FormGroup>
                    {/* CARREGA OS CAMPOS DE ENDEREÇO */}
                    <DadosEndereco />
                    {/* CARREGA OS CAMPOS DE CONTATO CLIENTE */}
                    <DadosContatoCli />
                    <FormGroup controlId="tipo-cliente-alt" className="tipo_cliente_alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Tipo Cliente
                        </Col>
                        <Radio name="radio" inline>
                        Caixas
                        </Radio>
                        <Radio name="radio" inline>
                        Digitalizado
                        </Radio>
                        <Radio name="radio" inline>
                        Ambos
                        </Radio>
                        <Radio name="radio" inline>
                        Prospect
                        </Radio>
                    </FormGroup>
                    <FormGroup controlId="ativo-cliente-alt" className="ativo_cliente_alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Ativo?
                        </Col>
                        <Radio name="radioGroup" inline checked>
                        Sim
                        </Radio>
                        <Radio name="radioGroup" inline>
                        Não
                        </Radio>
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