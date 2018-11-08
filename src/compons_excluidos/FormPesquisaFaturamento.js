// COMPONENTE PESQUISA FATURAMENTO UTILIZANDO FORM
// ***    SERÁ UTILIZADO COMO COMPONENTE BASE PARA OS FORMPESQUISA----> CLIENTE, USUARIO, FATURAMENTO  ***\\

import React from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCalculator } from '@fortawesome/free-solid-svg-icons';
import '../comps_css/FormPesquisaFaturamento.css';

library.add(faSearch, faCalculator);

export const FormPesquisaFaturamento = () => {
    return (
        <div name="border" className="teste_form">
            <Form inline action method="get" name="pesquisa-fatura" 
            className="pesquisa_fatura">
                <FormGroup controlId="codcontab-pesq" className="codcontab_pesq_group teste">
                    <ControlLabel>
                        Cod. Contab
                    </ControlLabel>
                    <FormControl name="codcontab-pesq" type="text" placeholder="Código" />
                </FormGroup>

                <FormGroup controlId="compet-pesq" className="compet_pesq_group teste">
                    <ControlLabel>
                        Competência
                    </ControlLabel>
                    <FormControl name="compet-pesq" type="text" placeholder="Competência" />
                </FormGroup>

                <FormGroup controlId="btn-pesq" className="teste">
                    <Button type="" className="btn_pesq btn_pesq_ffatura" title="Pesquisar">
                        <FontAwesomeIcon icon="search" />
                    </Button> 
                </FormGroup>

                <FormGroup controlId="btn-contab">
                    <Button type="" className="btn_contab btn_pesq_ffatura" title="Contabilidade">
                        Contabilidade? <FontAwesomeIcon icon="calculator" />
                    </Button> 
                </FormGroup>
            </Form>
        </div>
    );
}