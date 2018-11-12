// CADASTRA UM CONATO DE UM CLIENTE
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import LayoutForm from './LayoutForm';
// IMPORTS CSS
// IMPORTS AUXILIARES
import { ControlLabel, FormGroup, FormControl, Button} from 'react-bootstrap';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// 
var $ = require("jquery");
require('jquery-mask-plugin');
library.add(faCheckCircle, faTimesCircle);

export default class IncluirContatoCliente extends React.Component {
    render() {
        $(document).ready(function($){
            $('#tel-cad-cont').mask('+55 99 9999-9999');
        }); 
        return (
            <LayoutForm>
                <FormGroup controlId="idcli-cad-cont" className="fg_formcadcontatocli">
                   <ControlLabel>
                        Cód. Cliente
                    </ControlLabel>
                    {/* VALOR VIRIA CARREGADO */}
                    <FormControl type="text" placeholder="" disabled="true"/>
                </FormGroup>
                <FormGroup controlId="idcont-cad-cont" className="fg_formcadcontatocli">
                   <ControlLabel>
                        Cód. Contato
                    </ControlLabel>
                    <FormControl type="text" placeholder="Contato" />
                </FormGroup>
                <FormGroup controlId="nome-cad-cont" className="fg_formcadcontatocli">
                   <ControlLabel>
                        Nome
                    </ControlLabel>
                    <FormControl type="text" placeholder="Nome" />
                </FormGroup>
                <FormGroup controlId="email-cad-cont" className="fg_formcadcontatocli">
                   <ControlLabel>
                        Email
                    </ControlLabel>
                    <FormControl type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup controlId="tel-cad-cont" className="fg_formcadcontatocli">
                   <ControlLabel>
                        Telefone
                    </ControlLabel>
                    <FormControl type="tel" placeholder="Telefone" />
                </FormGroup>
                <FormGroup controlId="area-cad-cont" className="fg_formcadcontatocli">
                   <ControlLabel>
                        Área Responsável
                    </ControlLabel>
                    <FormControl type="text" placeholder="Área Responsável" />
                </FormGroup>
                <FormGroup controlId="cargo-cad-cont" className="fg_formcadcontatocli">
                   <ControlLabel>
                        Cargo
                    </ControlLabel>
                    <FormControl type="text" placeholder="Cargo" />
                </FormGroup>
                <FormGroup controlId="btn-cadastrar" className="fg_formcadcontatocli inbtn">
                    <Button type="" className="">
                        Cadastrar <FontAwesomeIcon icon="check-circle" className="icon-check-cad"/>
                    </Button>
                </FormGroup>
                <FormGroup controlId="btn-cancel" className="fg_formcadcontatocli inbtn">
                    <Button type="" className="">
                        Cancelar <FontAwesomeIcon icon="times-circle" className="icon-cancel-cad"/>
                    </Button> 
                </FormGroup>
           </LayoutForm>
        );
    }
}