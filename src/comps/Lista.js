import React from 'react';
import { Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

library.add();

const smL = 4;
const smI = 7;

export default class Lista extends React.Component {
    render() {
        return (
            <div className="lista_cad">
            {/* SUBSTITUIR ESSE FORM DE PESQUISA POR UM COMPONENTE, 
            OU SEJA, CRIAR UM COMPONENTE COM ESSAS TAGS E IMPORTA-LO AQUI */}
                <Form action method="get" name="pesquisa-cliente" className="pesquisa_cliente">
                    <FormGroup controlId="cliente-pesq" className="cliente_pesq_group">
                        <Col componentClass={ControlLabel} sm={smL}>
                            Cliente
                        </Col>
                        <Col sm={smI}>
                            <FormControl name="cliente-pesq" 
                            type="text" placeholder="Cliente" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="cidade-pesq" className="cidade_pesq_group">
                        <Col componentClass={ControlLabel} sm={smL}>
                            Cidade
                        </Col>
                        <Col sm={smI}>
                            <FormControl name="cidade-pesq" 
                            type="text" placeholder="Cidade" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="status-pesq" className="status_pesq_group">
                        <Col componentClass={ControlLabel} sm={smL}>
                            Status
                        </Col>
                        <Col sm={smI}>
                            <FormControl name="status-pesq" 
                            componentClass="select">
                                <option>Ativo</option>
                                <option>Inativo</option>
                                <option>Todos</option>
                            </FormControl>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}