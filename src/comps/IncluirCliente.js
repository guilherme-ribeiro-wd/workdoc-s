// CADASTRAR CLIENTE
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import LayoutForm from '../comps/LayoutForm';
// IMPORTS CSS
// IMPORTS AUXILIARES
import { FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowRight, faTimesCircle);
// 
var $ = require("jquery");
require('jquery-mask-plugin');

export default class CadastroCliente extends React.Component {
    render() {
        $(document).ready(function($) {
            $('#cnpj-cliente').mask('99.999.999/9999-99');
        });
        return (
            <LayoutForm> 
                <FormGroup controlId="id-cliente" className="fg_formcadcliente">
                    <ControlLabel>
                        Cód. Cliente
                    </ControlLabel>
                    <FormControl type="text" placeholder="Código" maxLength="3"/>
                </FormGroup>
                <FormGroup controlId="razao-cliente" className="fg_formcadcliente">
                    <ControlLabel>
                        Razão Social
                    </ControlLabel>
                    <FormControl type="text" placeholder="Razão Social" />
                </FormGroup>
                <FormGroup controlId="fant-cliente" className="fg_formcadcliente">
                    <ControlLabel>
                        Nome Fantasia
                    </ControlLabel>
                    <FormControl type="text" placeholder="Nome Fantasia" />
                </FormGroup>
                <FormGroup controlId="cnpj-cliente" className="fg_formcadcliente">
                    <ControlLabel>
                        CNPJ
                    </ControlLabel>
                    <FormControl type="text" placeholder="__.___.___/____-__" />
                </FormGroup>
                <FormGroup controlId="btn-avancar" className="fg_formcadcliente inbtn">
                    <Button className="">
                        Avançar <FontAwesomeIcon icon="arrow-right" className="icon-arrow-cli"/>
                    </Button>
                </FormGroup>
                <FormGroup controlId="btn-cancel" className="fg_formcadcliente inbtn">
                    <Button type="" className="">
                        Cancelar <FontAwesomeIcon icon="times-circle" className="icon-cancel-cli"/>
                    </Button> 
                </FormGroup>
            </LayoutForm>
        )
    }
}