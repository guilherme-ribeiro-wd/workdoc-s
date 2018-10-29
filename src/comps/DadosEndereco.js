// RENDERIZA APENAS OS DADOS RELACIONADOS À ENDEREÇO
// CEP, ENDEREÇO, NÚMERO, COMPLEMENTO, CIDADE, BAIRRO, ESTADO
import { Estados as estados } from '../util/estados';
import React from 'react';
import { Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';
import '../css-geral-comps/DadosEndereco.css'

var $ = require("jquery");
require('jquery-mask-plugin');

const smL = 4;
const smI = 7;

export default class DadosEndereco extends React.Component {
    estadosOption(estados) {
        const options = [];
        for (let i = 0; i < estados.length; i++) {
            options.push(<option key={i} value={estados[i]}>{estados[i]}</option>);
        }
        return options;
    };

    render() {
        $(document).ready(function($) {
            $('#cep').mask('99999-999'); // FUNÇÃO BUSCA CEP - TODO
        });

        return (
            <div name="dados-endereco" id="dados-endereco">
                <Form horizontal >
                    <FormGroup controlId="cep" className="cep">
                        <Col componentClass={ControlLabel} sm={smL}>
                        CEP
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="cep" type="text" placeholder="CEP" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="ender" className="ender">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Endereço
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="ender" type="text" placeholder="Endereço" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="numender" className="numender">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Número
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="numender" type="text" placeholder="Número" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="comple" className="comple">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Complemento
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="comple" type="text" placeholder="Complemento" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="bairro" className="bairro">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Bairro
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="bairro" type="text" placeholder="Bairro" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="cidade" className="cidade">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Cidade
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="cidade" type="text" placeholder="Cidade" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="estado" className="estado">
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
                </Form>
            </div>
        )
    }
}
