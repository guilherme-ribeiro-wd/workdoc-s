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

export default class CadastroUsuario extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        $(document).ready(function($) {
            $('#dtnasc-user').mask('99/99/9999'); // FUNÇÃO VALIDA DATA - TODO
        });

        return (
            <LayoutForm>
                {/* FOTO DO USUARIO */}
                <FormGroup controlId="id-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Cód. Usuário
                    </ControlLabel>
                    <FormControl type="text" placeholder="" disabled />
                </FormGroup>
                <FormGroup controlId="nome-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Nome
                    </ControlLabel>
                    <FormControl type="text" placeholder="Nome completo" />
                </FormGroup>
                <FormGroup controlId="dtnasc-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Data Nasc.
                    </ControlLabel>
                    <FormControl type="text" placeholder="DD/MM/AAAA"/>
                </FormGroup>
                <FormGroup controlId="periodo-user" className="fg_formcadusuario periodo_left">
                    <ControlLabel>
                        Período
                    </ControlLabel>      
                    <FormControl id="inicioper-user" type="text" placeholder="Ínicio" />
                </FormGroup>
                <FormGroup className="periodo_right" style={width}> 
                    <ControlLabel>à</ControlLabel>
                    <FormControl id="terminoper-user" type="text" placeholder="Término" />
                </FormGroup>
                <FormGroup controlId="depto-user" className="depto_user fg_formcadusuario">
                    <ControlLabel>
                        Departamento
                    </ControlLabel>
                    <FormControl type="text" placeholder="Departamento"/>
                </FormGroup>
                <FormGroup controlId="login-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Login
                    </ControlLabel>
                    <FormControl type="text" placeholder="Login"/>
                </FormGroup>
                <FormGroup controlId="senha-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Senha
                    </ControlLabel>
                    <FormControl type="password" placeholder="Senha"/>
                </FormGroup>
                <FormGroup controlId="confsenha-user" className="fg_formcadusuario">
                    <ControlLabel>
                        Conf. Senha
                    </ControlLabel>
                    <FormControl type="password" placeholder="Confirme a senha"/>
                </FormGroup>
                <FormGroup controlId="atvdia-user" className="fg_formcadusuario">
                    <ControlLabel id="pad">
                        Preencher atividade diária?
                    </ControlLabel>
                    <Radio name="radio" inline checked>
                        Sim
                    </Radio>{' '}
                    <Radio name="radio" inline>
                        Não
                    </Radio>
                </FormGroup>
                <FormGroup controlId="nivel-user" className="nivel_user fg_formcadusuario">
                    <ControlLabel>
                        Nível de acesso
                    </ControlLabel>
                    <div className="border_chk_cadusuario">
                        <Checkbox inline className="chk_nivel_cadusuario" id="nvl-1">Administrador Depósito</Checkbox> 
                        <Checkbox inline className="chk_nivel_cadusuario" id="nvl-2">Atendente</Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" id="nvl-3">Gerente Cliente</Checkbox>
                        <ControlLabel></ControlLabel>
                        <Checkbox inline className="chk_nivel_cadusuario" id="nvl-4">Contabilidade</Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" id="nvl-5">Usuário Indexação</Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" id="nvl-6">Usuário Expedição</Checkbox>
                        <ControlLabel></ControlLabel>
                        <Checkbox inline className="chk_nivel_cadusuario" id="nvl-7">Digitador</Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" id="nvl-8">Usuário Cliente</Checkbox>
                        <Checkbox inline className="chk_nivel_cadusuario" id="nvl-9">Usuário Imagem</Checkbox>
                        <ControlLabel></ControlLabel>
                        <Checkbox inline className="chk_nivel_cadusuario" id="nvl-9">Usuário Recepção</Checkbox>
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