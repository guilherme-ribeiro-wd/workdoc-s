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
library.add(faCheckCircle, faTimesCircle);
// 
var $ = require("jquery");
require('jquery-mask-plugin');

export default class IncluirAdministradoras extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            codAdm: '',
            nomeAdm: '',
            rSocialAdm: '',
            nomeFantAdm: '',
            cnpjAdm: '',
            telAdm: ''
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
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
                    <FormControl name="codAdm" type="text" placeholder="Código" maxLength="3"
                        value={this.state.codAdm} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="nome-adm-cad" className="fg_formcadadm">
                    <ControlLabel>
                        Nome Administradora
                    </ControlLabel>
                    <FormControl name="nomeAdm" type="text" placeholder="Nome Administradora"
                    value={this.state.nomeAdm} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="razao-adm-cad" className="fg_formcadadm">
                    <ControlLabel>
                        Razão Social
                    </ControlLabel>
                    <FormControl name="rSocialAdm" type="text" placeholder="Razão Social"
                    value={this.state.rSocialAdm} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="fant-adm-cad" className="fg_formcadadm">
                    <ControlLabel>
                        Nome Fantasia
                    </ControlLabel> 
                    <FormControl name="nomeFantAdm" type="text" placeholder="Nome Fantasia"
                    value={this.state.nomeFantAdm} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="cnpj-adm-cad" className="fg_formcadadm">
                    <ControlLabel>
                        CNPJ
                    </ControlLabel>
                    <FormControl name="cnpjAdm" type="text" placeholder="__.___.___/____-__"
                    value={this.state.cnpjAdm} onChange={e => this.change(e)} />
                </FormGroup>
                {/* CHAMA O COMPONENTE DADOS DO ENDERECO */}
                <DadosEndereco />
                <FormGroup controlId="tel-adm-cad" className="fg_formcadadm">
                    <ControlLabel>
                        Telefone
                    </ControlLabel>
                    <FormControl name="telAdm" type="text" placeholder="Telefone"
                        value={this.state.telAdm} onChange={e => this.change(e)} />
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