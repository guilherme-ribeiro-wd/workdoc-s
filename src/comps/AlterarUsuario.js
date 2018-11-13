// ALTERAR USUARIO
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import LayoutForm from './LayoutForm';
import DadosEndereco from './DadosEndereco';
import DadosContTrab from './DadosContTrab';
// IMPORTS CSS
// IMPORTS AUXILIARES
import { FormControl, FormGroup, ControlLabel, Button, Radio } from 'react-bootstrap';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// 
var $ = require("jquery");
require('jquery-mask-plugin');
library.add(faCheckCircle, faTimesCircle);

export default class AlterarUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: "",
            imagePreviewUrl: "",
        }
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
            $('#dtnasc-user-alt').mask('99/99/9999'); // FUNÇÃO VALIDA DATA - TODO
            $('#cpf-user-alt').mask('999.999.999-99'); // FUNÇÃO VALIDA CPF - TODO
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
                    <FormGroup controlId="nome-user-alt" className="fg_formaltusuario">
                        <ControlLabel>
                            Nome
                        </ControlLabel>
                        {/* VALOR VIRIA CARREGADO */}
                        <FormControl type="text" placeholder="Nome completo" />
                    </FormGroup>
                    <FormGroup controlId="dtnasc-user-alt" className="fg_formaltusuario">
                        <ControlLabel>
                            Data Nasc.
                        </ControlLabel>
                        {/* VALOR VIRIA CARREGADO */}
                        <FormControl type="text" placeholder="DD/MM/AAAA"/>
                    </FormGroup>
                    <FormGroup controlId="cpf-user-alt" className="fg_formaltusuario">
                        <ControlLabel>
                            CPF
                        </ControlLabel>
                        <FormControl id="cpf-user-alt" type="text" placeholder="CPF"/>
                    </FormGroup>
                    <FormGroup controlId="foto-user" className="foto">
                        {$imagePreview}
                        <label htmlFor="foto-user" id="lblBtn" className="btn btn-default btn_uploadfoto infoto">
                            Enviar foto
                        </label>
                        <FormControl id="foto-user" name="foto" type="file" accept="image/*" 
                        onChange={e => this.handleImageChange(e)}/>
                    </FormGroup>
                    {/* CHAMA O COMPONENTE DADOS ENDEREÇO */}
                    <DadosEndereco />
                    {/* CHAMA O COMPONENTE DADOS CONT TRAB */}
                    <DadosContTrab />
                    <FormGroup controlId="ativo-user-alt" className="fg_formaltusuario">
                        <ControlLabel id="ativo">
                            Ativo?
                        </ControlLabel>
                        <Radio name="radio-ativo" inline checked>Sim</Radio>
                        <Radio name="radio-ativo" inline>Não</Radio>
                    </FormGroup>
                    <FormGroup controlId="login-user-alt" className="fg_formaltusuario">
                        <ControlLabel>Login</ControlLabel>
                        {/* VALOR VIRIA CARREGADO */}
                        <FormControl type="text" placeholder="Login"/>
                    </FormGroup>
                    <FormGroup controlId="senha-user-alt" className="fg_formaltusuario esq_senha">
                        <ControlLabel>
                            Senha
                        </ControlLabel>
                        {/* VALOR VIRIA CARREGADO */}
                        <FormControl type="password" placeholder="Senha"/>
                    </FormGroup>
                    <FormGroup controlId="confsenha-user-alt" className="fg_formaltusuario dir_senha">
                        <ControlLabel>
                            Conf. Senha
                        </ControlLabel>
                        {/* VALOR VIRIA CARREGADO */}
                        <FormControl type="password" placeholder="Confirme a senha"/>
                    </FormGroup>
                    <FormGroup controlId="btn-alt" className="fg_formaltusuario inbtn">
                        <Button type="" className="">
                            Gravar <FontAwesomeIcon icon="check-circle" className="icon-check"/>
                        </Button> 
                    </FormGroup>
                    <FormGroup controlId="btn-cancel" className="fg_formaltusuario inbtn">
                        <Button type="" className="">
                            Cancelar <FontAwesomeIcon icon="times-circle" className="icon-cancel"/>
                        </Button> 
                    </FormGroup>
                </LayoutForm>
        )
    }
}