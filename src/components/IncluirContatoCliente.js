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
library.add(faCheckCircle, faTimesCircle);
// 
var $ = require("jquery");
require('jquery-mask-plugin');
// CC = ContatoCliente
export default class IncluirContatoCliente extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            codCliente: '',
            codContato: '',
            nomeCC: '',
            emailCC: '',
            telCC: '',
            areaRespCC: '',
            cargoCC: '',
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

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
                    <FormControl name="codCliente" type="text" placeholder="" disabled="true"
                        value={this.state.codCliente} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="idcont-cad-cont" className="fg_formcadcontatocli">
                   <ControlLabel>
                        Cód. Contato
                    </ControlLabel>
                    <FormControl name="codContato" type="text" placeholder="Contato"
                        value={this.state.codContato} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="nome-cad-cont" className="fg_formcadcontatocli">
                   <ControlLabel>
                        Nome
                    </ControlLabel>
                    <FormControl name="nomeCC" type="text" placeholder="Nome"
                        value={this.state.nomeCC} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="email-cad-cont" className="fg_formcadcontatocli">
                   <ControlLabel>
                        Email
                    </ControlLabel>
                    <FormControl name="emailCC" type="email" placeholder="Email"
                        value={this.state.emailCC} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="tel-cad-cont" className="fg_formcadcontatocli">
                   <ControlLabel>
                        Telefone
                    </ControlLabel>
                    <FormControl name="telCC" type="tel" placeholder="Telefone"
                        value={this.state.telCC} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="area-cad-cont" className="fg_formcadcontatocli">
                   <ControlLabel>
                        Área Responsável
                    </ControlLabel>
                    <FormControl name="areaRespCC" type="text" placeholder="Área Responsável"
                        value={this.state.areaRespCC} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="cargo-cad-cont" className="fg_formcadcontatocli">
                   <ControlLabel>
                        Cargo
                    </ControlLabel>
                    <FormControl name="cargoCC" type="text" placeholder="Cargo"
                        value={this.state.cargoCC} onChange={e => this.change(e)} />
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