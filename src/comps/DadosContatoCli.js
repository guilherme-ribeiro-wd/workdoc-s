// RENDERIZA OS CAMPOS DE CONTATO DO CLIENTE
// TELEFONE, RAMAL, EMAIL, CONTATO
// INSC. ESTADUAL, INSC. MUNICIPAL, GRUPO

import React from 'react';
import '../css-geral-comps/DadosContatoCli.css'
import { Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';

const smL = 4;
const smI = 7;

export default class DadosContatoCli extends React.Component {
    render() {
        return (
            <div name="dados-cont-cli" id="dados-cont-cli">
                <Form horizontal>
                    <FormGroup controlId="tel-cliente-alt" className="tel-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Telefone
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="tel-cliente-alt" type="tel" placeholder="Telefone" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="ramal-cliente-alt" className="ramal-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Ramal
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="ramal-cliente-alt" type="text" placeholder="Ramal" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="email-cliente-alt" className="email-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Email
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="email-cliente-alt" type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="contato-cliente-alt" className="contato-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Contato
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="contato-cliente-alt" type="text" placeholder="Contato" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="inscest-cliente-alt" className="inscest-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Insc. Est.
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="inscest-cliente-alt" type="text" placeholder="Inscrição Estadual" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="inscmun-cliente-alt" className="inscmun-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Insc. Mun.
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="inscmun-cliente-alt" type="text" placeholder="Inscrição Municipal" />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="grupo-cliente-alt" className="grupo-cliente-alt">
                        <Col componentClass={ControlLabel} sm={smL}>
                        Grupo
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="grupo-cliente-alt" type="text" placeholder="Grupo" />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}