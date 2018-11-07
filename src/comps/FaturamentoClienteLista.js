// FORM PESQUISA LISTA CLIENTE FATURAMENTO

import React from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../css-geral-comps/FaturamentoClienteLista.css';

library.add(faSearch);


export default class FaturamentoClienteLista extends React.Component {
    render() {
        return (
            <div className="form_pesquisa_clifaturamento"> 
                <Form inline action method="get" className="pesquisa_clifaturamento">
                    <FormGroup controlId="cliente-pesq-clifaturamento" className="margin_formgroup">
                        <ControlLabel>
                            Cliente
                        </ControlLabel>
                        <FormControl type="text" placeholder="Cliente"/>
                    </FormGroup>
                    <FormGroup controlId="btn-pesq-clifaturamento" className="margin_formgroup">
                        <Button className="btn_pesq btn_pesq_clifaturamento" title="Pesquisar"><FontAwesomeIcon icon="search"/></Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}