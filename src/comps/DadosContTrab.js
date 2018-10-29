// RENDERIZA APENAS OS DADOS RELACIONADOS A CONTATO E TRABALHO
// TELEFONE, NEXTEL, EMAIL, FACEBOOK ---- CONTATO
// CODIGO CENTRO DE CUSTO, CARGO, DEPARTAMENTO ---- TRABALHO

import React from 'react';
import { Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';
import '../css-geral-comps/DadosContTrab.css'

var $ = require("jquery");
require('jquery-mask-plugin');

const smL = 4;
const smI = 7;


export default class DadosContTrab extends React.Component {
    render() {
        $(document).ready(function($){
            $('#tel').mask('+55 99 9999-9999')
        });
        return (
            <div name="dados-cont-trab" id="dados-cont-trab">
                <Form horizontal>
                    <FormGroup controlId="tel" className="tel">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Telefone
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="tel" type="tel" placeholder="Telefone"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="nextel" className="nextel">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Nextel
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="nextel" type="tel" placeholder="Nextel"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="fb" className="fb">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Facebook.com/
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="fb" type="text" placeholder="Facebook"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="email">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Email
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="email" type="email" placeholder="Email"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="codcentro">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Cód. Centro Custo
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="codcentro" type="text" placeholder="Código Centro de Custo"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="cargo" className="cargo">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Cargo
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="cargo" type="text" placeholder="Cargo"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="depto" className="depto">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Depto.
                        </Col>
                        <Col sm={smI}>
                        {/* VALOR VIRIA CARREGADO */}
                        <FormControl name="depto" type="text" placeholder="Departamento"/>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}