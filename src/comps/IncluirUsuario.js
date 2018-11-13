// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import LayoutForm from '../comps/LayoutForm';
// IMPORTS CSS
// IMPORTS AUXILIARES
import { FormControl, FormGroup, ControlLabel, Button, Radio, Checkbox } from 'react-bootstrap';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// 
var $ = require("jquery");
require('jquery-mask-plugin');
library.add(faCheckCircle, faTimesCircle);

const width = {
    width: '300px'
}

const styleFoto = {
    height: '185px'
}

export default class CadastroUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            codUsuario: '',
            nomeUsuario: '',
            dtNascUsuario: '',
            perInicioUsuario: '',
            perTerminoUsuario: '',
            deptoUsuario: '',
            loginUsuario: '',
            senhaUsuario: '',
            confSenhaUsuario: '',
            atvDiaria: 'sim',
            nvlUsuario: ['', '', '', 
                            '', '', '', 
                            '', '', '', 
                            ''],
            file: '',
            imagePreviewUrl: '',
        }
    }

    change = (e) => {
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
            $('#dtnasc-user').mask('99/99/9999'); // FUNÇÃO VALIDA DATA - TODO
        });
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
        $imagePreview = (<img id="foto" className="infoto" src={imagePreviewUrl} alt="logo"/>);
        } else {
            $imagePreview = (<img id="foto" className="infoto" src="http://www.agion-oros.eu/wp-content/uploads/2018/02/180x180.jpg" alt="logo"/>);
        }

        return (
            <LayoutForm>
                <FormGroup controlId="id-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Cód. Usuário
                    </ControlLabel>
                    <FormControl name="codUsuario" type="text" placeholder="" disabled
                        value={this.state.codUsuario} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="nome-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Nome
                    </ControlLabel>
                    <FormControl name="nomeUsuario" type="text" placeholder="Nome completo"
                        value={this.state.nomeUsuario} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="dtnasc-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Data Nasc.
                    </ControlLabel>
                    <FormControl name="dtNascUsuario" type="text" placeholder="DD/MM/AAAA" 
                        value={this.state.dtNascUsuario} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="foto-user" className="foto" style={styleFoto}>
                    {$imagePreview}
                    <label htmlFor="foto-user" id="lblBtn" className="btn btn-default btn_uploadfoto infoto">
                        Enviar foto
                    </label>
                    <FormControl id="foto-user" name="foto" type="file" accept="image/*" 
                    onChange={e => this.handleImageChange(e)}/>
                </FormGroup>
                <FormGroup controlId="periodo-user" className="fg_formcadusuario periodo_left">
                    <ControlLabel>
                        Período
                    </ControlLabel>      
                    <FormControl name="perInicioUsuario" id="inicioper-user" type="text" placeholder="Ínicio"
                        value={this.state.perInicioUsuario} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup className="periodo_right" style={width}> 
                    <ControlLabel>à</ControlLabel>
                    <FormControl name="perTerminoUsuario" id="terminoper-user" type="text" placeholder="Término"
                        value={this.state.perTerminoUsuario} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="depto-user" className="depto_user fg_formcadusuario">
                    <ControlLabel>
                        Departamento
                    </ControlLabel>
                    <FormControl name="deptoUsuario" type="text" placeholder="Departamento"
                        value={this.state.deptoUsuario} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="login-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Login
                    </ControlLabel>
                    <FormControl name="loginUsuario" type="text" placeholder="Login"
                        value={this.state.loginUsuario} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="senha-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Senha
                    </ControlLabel>
                    <FormControl name="senhaUsuario" type="password" placeholder="Senha"
                        value={this.state.senhaUsuario} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="confsenha-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Conf. Senha
                    </ControlLabel>
                    <FormControl name="confSenhaUsuario" type="password" placeholder="Confirme a senha"
                        value={this.state.confSenhaUsuario} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="atvdia-user" className="fg_formcadusuario">
                    <ControlLabel id="pad">
                        Preencher atividade diária?
                    </ControlLabel>
                    <Radio name="atvDiaria" inline value="sim" 
                        checked={this.state.atvDiaria === 'sim'} onChange={e => this.change(e)} >
                        Sim
                    </Radio>{' '}
                    <Radio name="atvDiaria" inline value="nao" 
                        checked={this.state.atvDiaria === 'nao'} onChange={e => this.change(e)} >
                        Não
                    </Radio>
                </FormGroup>
                <FormGroup controlId="nivel-user" className="nivel_user fg_formcadusuario">
                    <ControlLabel>
                        Nível de acesso
                    </ControlLabel>
                    <div className="border_chk_cadusuario">
                        <Checkbox inline className="chk_nivel_cadusuario" name="nvl-1">Administrador Depósito</Checkbox> 
                        <Checkbox inline className="chk_nivel_cadusuario" name="nvl-2">Atendente</Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" name="nvl-3">Gerente Cliente</Checkbox>
                        <ControlLabel></ControlLabel>
                        <Checkbox inline className="chk_nivel_cadusuario" name="nvl-4">Contabilidade</Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" name="nvl-5">Usuário Indexação</Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" name="nvl-6">Usuário Expedição</Checkbox>
                        <ControlLabel></ControlLabel>
                        <Checkbox inline className="chk_nivel_cadusuario" name="nvl-7">Digitador</Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" name="nvl-8">Usuário Cliente</Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" name="nvl-9">Usuário Imagem</Checkbox>
                        <ControlLabel></ControlLabel>
                        <Checkbox inline className="chk_nivel_cadusuario" name="nvl-10">Usuário Recepção</Checkbox>
                    </div>
                </FormGroup>
                <FormGroup controlId="btnCadastrar" className="fg_formcadusuario inbtn">
                    <Button type="" className="">
                        Cadastrar <FontAwesomeIcon icon="check-circle" />
                    </Button>
                </FormGroup>
                <FormGroup controlId="btnCancel" className="fg_formcadusuario inbtn">
                    <Button type="" className="">
                        Cancelar <FontAwesomeIcon icon="times-circle" />
                    </Button> 
                </FormGroup>
            </LayoutForm>
        );
    }
}