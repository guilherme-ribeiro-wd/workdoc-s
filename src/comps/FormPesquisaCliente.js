/* COMPONENTE PESQUISA PARA CLIENTE UTILIZANDO FORM */

import React from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSearch, faPrint } from '@fortawesome/free-solid-svg-icons';
import '../css-geral-comps/FormPesquisaCliente.css';

library.add(faSearch, faUser, faPrint);

const borderStyle = {
    borderTop: '2px solid #e7e7e7',
    marginTop: '10px'
}

const styleForm = {
    marginTop: '5px',
    marginLeft: '290px'
}
export default class FormPesquisaCliente extends React.Component {
    render() {
        return (
            <div name="border" style={borderStyle}>
                <Form inline action method="get" name="pesquisa-cliente" 
                className="pesquisa_cliente" style={styleForm}>
                    <FormGroup controlId="cliente-pesq" className="cliente_pesq_group">
                        <ControlLabel>
                            Cliente
                        </ControlLabel>
                        <FormControl name="cliente-pesq" type="text" placeholder="Cliente" />
                    </FormGroup>

                    <FormGroup controlId="cidade-pesq" className="cidade_pesq_group">
                        <ControlLabel>
                            Cidade
                        </ControlLabel>
                        <FormControl name="cidade-pesq" type="text" placeholder="Cidade" />
                    </FormGroup>

                    <FormGroup controlId="status-pesq" className="status_pesq_group" >
                        <ControlLabel>
                            Status
                        </ControlLabel>
                        <FormControl name="status-pesq" componentClass="select">
                            <option>Ativo</option>
                            <option>Inativo</option>
                            <option>Todos</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="btn-pesq">
                        <Button type="" className="btn_pesq btn_pesq_fcliente" title="Pesquisar">
                            <FontAwesomeIcon icon="search" />
                        </Button> 
                    </FormGroup>

                    <FormGroup controlId="btn-incluir">
                        <Button type="" className="btn_incluir btn_pesq_fcliente" title="Incluir">
                            <FontAwesomeIcon icon="user" />
                        </Button> 
                    </FormGroup>

                    <FormGroup controlId="btn-relatorio">
                        <Button type="" className="btn_relatorio btn_pesq_fcliente" title="Relatorio">
                            <FontAwesomeIcon icon="print" />
                        </Button> 
                    </FormGroup>
                </Form>
            </div>
        );
    }
}