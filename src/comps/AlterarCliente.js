// ALTERAR CLIENTE
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import LayoutForm from './LayoutForm';
import DadosEndereco from './DadosEndereco';
import DadosContatoCli from './DadosContatoCli';
// IMPORTS CSS
// IMPORTS AUXILIARES
import {FormGroup, FormControl, ControlLabel, Radio, Button} from 'react-bootstrap';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// 
var $ = require("jquery");
require('jquery-mask-plugin');
library.add(faCheckCircle, faTimesCircle);

export default class AlterarCliente extends React.Component {
    render() {
        $(document).ready(function($) {
            $('#cnpj-cliente-alt').mask('99.999.999/9999-99'); // FUNÇÃO VALIDAD CNPJ - TODO
            $('#cep-cliente-alt').mask('99999-999'); // FUNÇÃO BUSCA CEP - TODO
            $('#tel-cliente-alt').mask('+55 99 9999-9999'); 
        });
        return (
            <LayoutForm>
                <FormGroup controlId="id-cliente-alt" className="fg_formaltcli">
                    <ControlLabel>
                        Cód. Cliente
                    </ControlLabel>
                    {/* VALOR VIRIA CARREGADO */}
                    <FormControl type="text" placeholder="" disabled="true"/>
                </FormGroup>
                <FormGroup controlId="razao-cliente-alt" className="fg_formaltcli">
                    <ControlLabel>
                        Razão Social
                    </ControlLabel>
                    {/* VALOR VIRIA CARREGADO */}
                    <FormControl type="text" placeholder="Razão Social" />
                </FormGroup>
                <FormGroup controlId="fant-cliente-alt" className="fg_formaltcli">
                    <ControlLabel>
                        Nome Fantasia
                    </ControlLabel>
                    {/* VALOR VIRIA CARREGADO */}
                    <FormControl type="text" placeholder="Nome Fantasia" />
                </FormGroup>
                <FormGroup controlId="cnpj-cliente-alt" className="fg_formaltcli">
                    <ControlLabel>
                        CNPJ
                    </ControlLabel>
                    {/* VALOR VIRIA CARREGADO */}
                    <FormControl type="text" placeholder="__.___.___/____-__" />
                </FormGroup>
                {/* CARREGA OS CAMPOS DE ENDEREÇO */}
                <DadosEndereco />
                {/* CARREGA OS CAMPOS DE CONTATO CLIENTE */}
                <DadosContatoCli />
                <FormGroup controlId="tipo-cliente-alt" className="fg_formaltcli">
                    <ControlLabel id="tipocli">
                        Tipo Cliente
                    </ControlLabel>
                    <Radio name="radio-tipocli" inline>Caixas</Radio>
                    <Radio name="radio-tipocli" inline>Digitalizado</Radio>
                    <ControlLabel id="tipoclihidden">
                        Tipo Cliente
                    </ControlLabel>
                    <Radio name="radio-tipocli" inline>Ambos</Radio>
                    <Radio name="radio-tipocli" inline>Prospect</Radio>
                </FormGroup>
                <FormGroup controlId="ativo-cliente-alt" className="fg_formaltcli">
                    <ControlLabel id="ativo">
                        Ativo?
                    </ControlLabel>
                    <Radio name="radio-ativocli" inline checked>Sim</Radio>
                    <Radio name="radio-ativocli" inline>Não</Radio>
                </FormGroup>
                <FormGroup controlId="btn-alt" className="fg_formaltcli inbtn">
                    <Button type="" className="">
                        Gravar <FontAwesomeIcon icon="check-circle" className="icon-check"/>
                    </Button> 
                </FormGroup>
                <FormGroup controlId="btn-cancel" className="fg_formaltcli inbtn">
                    <Button type="" className="">
                        Cancelar <FontAwesomeIcon icon="times-circle" className="icon-cancel"/>
                    </Button> 
                </FormGroup>
            </LayoutForm>
        );
    }
}