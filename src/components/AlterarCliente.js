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
library.add(faCheckCircle, faTimesCircle);
// 
var $ = require("jquery");
require('jquery-mask-plugin');

export default class AlterarCliente extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            codCliente: '2', // valor viria carregado
            rSocialCliente: '3', // valor viria carregado
            nomeFantCliente: '4', // valor viria carregado
            cnpjCliente: '5', // valor viria carregado
            tipoCliente: '', // radio
            ativoCliente: '', //radio
            // state dados endereço
            cepEnder: '6',
            enderecoEnder: '7',
            numeroEnder: '8',
            complementoEnder: '9',
            bairroEnder: '10',
            cidadeEnder: '11',
            estadoEnder: 'Rio de Janeiro',
            // state dados contato cli
            telContCli: 'work',
            ramalContCli: 'ys',
            emailContCli: 's',
            contatoContCli: '545',
            inscEstContCli: 'uhul',
            inscMunContCli: 'teste funfando',
            grupoContCli: 'ok',
            file: "", // logo empresa
            imagePreviewUrl: "", // logo empresa
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }

        reader.readAsDataURL(file);
    }

    render() {
        $(document).ready(function($) {
            $('#cnpj-cliente-alt').mask('99.999.999/9999-99'); // FUNÇÃO VALIDAD CNPJ - TODO
            $('#cep').mask('99999-999'); // FUNÇÃO BUSCA CEP - TODO
        });
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
        $imagePreview = (<img id="logo" className="inlogo" src={imagePreviewUrl} alt="logo"/>);
        } else {
            $imagePreview = (<img id="logo" className="inlogo" src="http://www.agion-oros.eu/wp-content/uploads/2018/02/180x180.jpg" alt="logo"/>);
        }
        return (
            <LayoutForm>
                <FormGroup controlId="id-cliente-alt" className="fg_formaltcli">
                    <ControlLabel>
                        Cód. Cliente
                    </ControlLabel>
                    <FormControl name="codCliente" type="text" placeholder="" disabled="true"
                        value={this.state.codCliente} onChange={e => this.changeHandler(e)} />
                </FormGroup>
                <FormGroup controlId="razao-cliente-alt" className="fg_formaltcli">
                    <ControlLabel>
                        Razão Social
                    </ControlLabel>
                    <FormControl name="rSocialCliente" type="text" placeholder="Razão Social"
                        value={this.state.rSocialCliente} onChange={e => this.changeHandler(e)} />
                </FormGroup>
                <FormGroup controlId="fant-cliente-alt" className="fg_formaltcli">
                    <ControlLabel>
                        Nome Fantasia
                    </ControlLabel>
                    <FormControl name="nomeFantCliente" type="text" placeholder="Nome Fantasia"
                        value={this.state.nomeFantCliente} onChange={e => this.changeHandler(e)} />
                </FormGroup>
                <FormGroup controlId="cnpj-cliente-alt" className="fg_formaltcli">
                    <ControlLabel>
                        CNPJ
                    </ControlLabel>
                    <FormControl name="cnpjCliente" type="text" placeholder="__.___.___/____-__"
                        value={this.state.cnpjCliente} onChange={e => this.changeHandler(e)} />
                </FormGroup>
                <FormGroup controlId="logo-cliente-alt" className="logo">
                    {$imagePreview}
                    <label htmlFor="logo-cliente-alt" id="lblBtn" className="btn btn-default btn_uploadlogo inlogo">
                        Enviar logo da empresa
                    </label>
                    <FormControl id="logo-cliente-alt" name="logo" type="file" accept="image/*" 
                    onChange={e => this.handleImageChange(e)}/>
                </FormGroup>
                {/* CARREGA OS CAMPOS DE ENDEREÇO */}
                <DadosEndereco 
                    changed={this.changeHandler} 
                    cepEnder={this.state.cepEnder} 
                    enderecoEnder={this.state.enderecoEnder} 
                    numeroEnder={this.state.numeroEnder}
                    complementoEnder={this.state.complementoEnder}
                    bairroEnder={this.state.bairroEnder}
                    cidadeEnder={this.state.cidadeEnder}
                    estadoEnder={this.state.estadoEnder} />
                {/* CARREGA OS CAMPOS DE CONTATO CLIENTE */}
                <DadosContatoCli 
                    changed={this.changeHandler}
                    telContCli={this.state.telContCli}
                    ramalContCli={this.state.ramalContCli}
                    emailContCli={this.state.emailContCli}
                    contatoContCli={this.state.contatoContCli}
                    inscEstContCli={this.state.inscEstContCli}
                    inscMunContCli={this.state.inscMunContCli}
                    grupoContCli={this.state.grupoContCli} />
                <FormGroup controlId="tipo-cliente-alt" className="fg_formaltcli">
                    <ControlLabel id="tipocli">
                        Tipo Cliente
                    </ControlLabel>
                    <Radio name="tipoCliente" inline value="caixas"
                        checked={this.state.tipoCliente === "caixas"}
                        onChange={e => this.changeHandler(e)}>
                        Caixas
                    </Radio>
                    <Radio name="tipoCliente" inline value="digitalizado"
                        checked={this.state.tipoCliente === "digitalizado"} 
                        onChange={e => this.changeHandler(e)}>
                        Digitalizado
                    </Radio>
                    <ControlLabel id="tipoclihidden">
                        Tipo Cliente
                    </ControlLabel>
                    <Radio name="tipoCliente" inline value="ambos"
                        checked={this.state.tipoCliente === "ambos"}
                        onChange={e => this.changeHandler(e)}>
                        Ambos
                    </Radio>
                    <Radio name="tipoCliente" inline value="prospect"
                        checked={this.state.tipoCliente === "prospect"}
                        onChange={e => this.changeHandler(e)}>
                        Prospect
                    </Radio>
                </FormGroup>
                <FormGroup controlId="ativo-cliente-alt" className="fg_formaltcli">
                    <ControlLabel id="ativo">
                        Ativo?
                    </ControlLabel>
                    <Radio name="ativoCliente" inline value="sim" 
                        checked={this.state.ativoCliente === 'sim'}
                        onChange={e => this.changeHandler(e)}>
                        Sim
                    </Radio>
                    <Radio name="ativoCliente" inline value="nao" 
                        checked={this.state.ativoCliente === 'nao'}
                        onChange={e => this.changeHandler(e)}>
                        Não
                    </Radio>
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