// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import LayoutForm from './LayoutForm';
import DadosEndereco from './DadosEndereco';
// IMPORTS CSS
// IMPORTS AUXILIARES
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// 
var $ = require("jquery");
require('jquery-mask-plugin');
library.add(faCheckCircle, faTimesCircle);

export default class IncluirAdministradoras extends React.Component {
    render() {
        $(document).ready(function($){
            $('#cnpj-adm-cad').mask('99.999.999/9999-99');
            $('#tel-adm-cad').mask('+55 99 9999-9999');
        });
        return (
            <LayoutForm>
                <FormGroup controlId="id-adm-cad" className="fg_formcadadm">
                    <ControlLabel>
                        Cód. Administradora
                    </ControlLabel>
                    <FormControl type="text" placeholder="Código" maxLength="3" />
                </FormGroup>
                <FormGroup controlId="nome-adm-cad" className="fg_formcadadm">
                    <ControlLabel>
                        Nome Administradora
                    </ControlLabel>
                    <FormControl type="text" placeholder="Nome Administradora" />
                </FormGroup>
                <FormGroup controlId="razao-adm-cad" className="fg_formcadadm">
                    <ControlLabel>
                        Razão Social
                    </ControlLabel>
                    <FormControl type="text" placeholder="Razão Social" />
                </FormGroup>
                <FormGroup controlId="fant-adm-cad" className="fg_formcadadm">
                    <ControlLabel>
                        Nome Fantasia
                    </ControlLabel> 
                    <FormControl type="text" placeholder="Nome Fantasia" />
                </FormGroup>
                <FormGroup controlId="cnpj-adm-cad" className="fg_formcadadm">
                    <ControlLabel>
                        CNPJ
                    </ControlLabel>
                    <FormControl type="text" placeholder="__.___.___/____-__" />
                </FormGroup>
                {/* CHAMA O COMPONENTE DADOS DO ENDERECO */}
                <DadosEndereco />
                <FormGroup controlId="tel-adm-cad" className="fg_formcadadm">
                    <ControlLabel>
                        Telefone
                    </ControlLabel>
                    <FormControl type="text" placeholder="Telefone" />
                </FormGroup>
                <FormGroup controlId="btn-alt" className="fg_formcadadm inbtn">
                    <Button type="" className="">
                        Gravar <FontAwesomeIcon icon="check-circle" className="icon_check"/>
                    </Button> 
                </FormGroup>
                <FormGroup controlId="bt-cancel" className="fg_formcadadm inbtn">
                    <Button type="" className="">
                        Cancelar <FontAwesomeIcon icon="times-circle" className="icon_cancel"/>
                    </Button> 
                </FormGroup>
            </LayoutForm>
        );
    }
}