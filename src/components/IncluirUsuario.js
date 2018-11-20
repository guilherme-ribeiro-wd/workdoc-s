// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import LayoutForm from '../components/LayoutForm';
// IMPORTS CSS
// IMPORTS AUXILIARES
import { FormControl, FormGroup, ControlLabel, Button, Radio, Checkbox } from 'react-bootstrap';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faCheckCircle, faTimesCircle);
// 
var $ = require("jquery");
require('jquery-mask-plugin');

const width = {
    width: '300px'
}

const styleFoto = {
    height: '185px'
}

export default class CadastroUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
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
            nvlUsuario: [false, false, false, 
                        false, false, false, 
                        false, false, false, 
                        false],
            file: "",
            imagePreviewUrl: "",
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

    handleCheckChange(e) {
        const nvlUsuario = this.state.nvlUsuario;
        let item = parseInt(e.target.name);
        let isChecked = e.target.checked;

        nvlUsuario[item] = isChecked;
        // re-render
        this.forceUpdate();
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
                        value={this.state.codUsuario} onChange={e => this.changeHandler(e)} />
                </FormGroup>
                <FormGroup controlId="nome-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Nome
                    </ControlLabel>
                    <FormControl name="nomeUsuario" type="text" placeholder="Nome completo"
                        value={this.state.nomeUsuario} onChange={e => this.changeHandler(e)} />
                </FormGroup>
                <FormGroup controlId="dtnasc-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Data Nasc.
                    </ControlLabel>
                    <FormControl name="dtNascUsuario" type="text" placeholder="DD/MM/AAAA" 
                        value={this.state.dtNascUsuario} onChange={e => this.changeHandler(e)} />
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
                        value={this.state.perInicioUsuario} onChange={e => this.changeHandler(e)} />
                </FormGroup>
                <FormGroup className="periodo_right" style={width}> 
                    <ControlLabel>à</ControlLabel>
                    <FormControl name="perTerminoUsuario" id="terminoper-user" type="text" placeholder="Término"
                        value={this.state.perTerminoUsuario} onChange={e => this.changeHandler(e)} />
                </FormGroup>
                <FormGroup controlId="depto-user" className="depto_user fg_formcadusuario">
                    <ControlLabel>
                        Departamento
                    </ControlLabel>
                    <FormControl name="deptoUsuario" type="text" placeholder="Departamento"
                        value={this.state.deptoUsuario} onChange={e => this.changeHandler(e)} />
                </FormGroup>
                <FormGroup controlId="login-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Login
                    </ControlLabel>
                    <FormControl name="loginUsuario" type="text" placeholder="Login"
                        value={this.state.loginUsuario} onChange={e => this.changeHandler(e)} />
                </FormGroup>
                <FormGroup controlId="senha-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Senha
                    </ControlLabel>
                    <FormControl name="senhaUsuario" type="password" placeholder="Senha"
                        value={this.state.senhaUsuario} onChange={e => this.changeHandler(e)} />
                </FormGroup>
                <FormGroup controlId="confsenha-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Conf. Senha
                    </ControlLabel>
                    <FormControl name="confSenhaUsuario" type="password" placeholder="Confirme a senha"
                        value={this.state.confSenhaUsuario} onChange={e => this.changeHandler(e)} />
                </FormGroup>
                <FormGroup controlId="atvdia-user" className="fg_formcadusuario">
                    <ControlLabel id="pad">
                        Preencher atividade diária?
                    </ControlLabel>
                    <Radio name="atvDiaria" inline value="sim" 
                        checked={this.state.atvDiaria === 'sim'} onChange={e => this.changeHandler(e)} >
                        Sim
                    </Radio>{' '}
                    <Radio name="atvDiaria" inline value="nao" 
                        checked={this.state.atvDiaria === 'nao'} onChange={e => this.changeHandler(e)} >
                        Não
                    </Radio>
                </FormGroup>
                <FormGroup controlId="nivel-user" className="nivel_user fg_formcadusuario">
                    <ControlLabel>
                        Nível de acesso
                    </ControlLabel>
                    <div className="border_chk_cadusuario">
                        <Checkbox inline className="chk_nivel_cadusuario" name="0" 
                            checked={this.state.nvlUsuario[0]} onChange={e => this.handleCheckChange(e)}>
                            Administrador Depósito
                        </Checkbox> 
                        <Checkbox inline className="chk_nivel_cadusuario" name="1"
                            checked={this.state.nvlUsuario[1]} onChange={e => this.handleCheckChange(e)}>
                            Atendente
                        </Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" name="2"
                            checked={this.state.nvlUsuario[2]} onChange={e => this.handleCheckChange(e)}>
                            Gerente Cliente
                        </Checkbox>
                        <ControlLabel></ControlLabel>
                        <Checkbox inline className="chk_nivel_cadusuario" name="3"
                            checked={this.state.nvlUsuario[3]} onChange={e => this.handleCheckChange(e)}>
                            Contabilidade
                        </Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" name="4"
                            checked={this.state.nvlUsuario[4]} onChange={e => this.handleCheckChange(e)}>
                            Usuário Indexação
                        </Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" name="5"
                            checked={this.state.nvlUsuario[5]} onChange={e => this.handleCheckChange(e)}>
                            Usuário Expedição
                        </Checkbox>
                        <ControlLabel></ControlLabel>
                        <Checkbox inline className="chk_nivel_cadusuario" name="6"
                            checked={this.state.nvlUsuario[6]} onChange={e => this.handleCheckChange(e)}>
                            Digitador
                        </Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" name="7"
                            checked={this.state.nvlUsuario[7]} onChange={e => this.handleCheckChange(e)}>
                            Usuário Cliente
                        </Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" name="8"
                            checked={this.state.nvlUsuario[8]} onChange={e => this.handleCheckChange(e)}>
                            Usuário Imagem
                        </Checkbox>
                        <ControlLabel></ControlLabel>
                        <Checkbox inline className="chk_nivel_cadusuario" name="9"
                            checked={this.state.nvlUsuario[9]} onChange={e => this.handleCheckChange(e)}>
                            Usuário Recepção
                        </Checkbox>
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