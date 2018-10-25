import { Estados as estados } from '../estados';
import React from 'react';
import {Form, Col, FormGroup, FormControl, ControlLabel, Radio, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
var $ = require("jquery");
require('jquery-mask-plugin');

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
                    <FormGroup controlId="cep-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        CEP
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="cep-cliente-alt" type="text" placeholder="CEP" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="ender-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Endereço
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="ender-cliente-alt" type="text" placeholder="Endereço" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="numender-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Número
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="numender-cliente-alt" type="text" placeholder="Número" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="comple-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Complemento
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="comple-cliente-alt" type="text" placeholder="Complemento" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="bairro-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Bairro
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="bairro-cliente-alt" type="text" placeholder="Bairro" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="cidade-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Cidade
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="cidade-cliente-alt" type="text" placeholder="Cidade" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="estado-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Estado
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="estado-cliente-alt" componentClass="select">
                            <option value="Selecione...">Selecione...</option>
                            {this.estadosOption(estados)}
                        </FormControl>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="tel-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Telefone
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="tel-cliente-alt" type="text" placeholder="Telefone" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="ramal-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Ramal
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="ramal-cliente-alt" type="text" placeholder="Ramal" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="email-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Email
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="email-cliente-alt" type="text" placeholder="Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="contato-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Contato
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="contato-cliente-alt" type="text" placeholder="Contato" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="inscest-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Insc. Est.
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="inscest-cliente-alt" type="text" placeholder="Inscrição Estadual" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="inscmun-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Insc. Mun.
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="inscmun-cliente-alt" type="text" placeholder="Inscrição Municipal" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="grupo-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Grupo
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="grupo-cliente-alt" type="text" placeholder="Grupo" />
                        </Col>
                    </FormGroup>
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
                </fieldset>
            </Form>
        );
    }
}