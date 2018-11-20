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
            nomeUsuario: 'okay', // valor viria carregado
            dtNascUsuario: '23/33/2658', // valor viria carregado
            cpfUsuario: '456464',
            ativoUsuario: 'sim',
            loginUsuario: 'zeiasj', // valor viria carregado
            senhaUsuario: 's5s5s5s', // valor viria carregado
            confSenhaUsuario: 's5s5s5s', // valor viria carregado
            // state dados endereco
            cepEnder: '6',
            enderecoEnder: '7',
            numeroEnder: '8',
            complementoEnder: '9',
            bairroEnder: '10',
            cidadeEnder: '11',
            estadoEnder: 'Rio de Janeiro',
            // state dados contato trabalho
            telContTrab: '6',
            nextelContTrab: 'o',
            facebookContTrab: 'r',
            emailContTrab: 'i',
            codCentroCustoContTrab: 'n',
            cargoContTrab: 't',
            deptoContTrab: 'h',
            file: "", // foto usuario
            imagePreviewUrl: "", // foto usuario
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
            $('#dtnasc-user-alt').mask('99/99/9999'); // FUNÇÃO VALIDA DATA - TODO
            $('#cpf-user-alt').mask('999.999.999-99'); // FUNÇÃO VALIDA CPF - TODO
            $('#tel').mask('+55 99 9999-9999')
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
                        <FormControl name="nomeUsuario" type="text" placeholder="Nome completo"
                            value={this.state.nomeUsuario} onChange={e => this.changeHandler(e)} />
                    </FormGroup>
                    <FormGroup controlId="dtnasc-user-alt" className="fg_formaltusuario">
                        <ControlLabel>
                            Data Nasc.
                        </ControlLabel>
                        <FormControl name="dtNascUsuario" type="text" placeholder="DD/MM/AAAA"
                            value={this.state.dtNascUsuario} onChange={e => this.changeHandler(e)} />
                    </FormGroup>
                    <FormGroup controlId="cpf-user-alt" className="fg_formaltusuario">
                        <ControlLabel>
                            CPF
                        </ControlLabel>
                        <FormControl name="cpfUsuario" id="cpf-user-alt" type="text" placeholder="CPF"
                            value={this.state.cpfUsuario} onChange={e => this.changeHandler(e)} />
                    </FormGroup>
                    <FormGroup controlId="foto-user" className="foto">
                        {$imagePreview}
                        <label htmlFor="foto-user" id="lblBtn" className="btn btn-default btn_uploadfoto infoto">
                            Enviar foto
                        </label>
                        <FormControl id="foto-user" name="foto" type="file" accept="image/*" 
                        onChange={e => this.handleImageChange(e)}/>
                    </FormGroup>
                    <DadosEndereco 
                        changed={this.changeHandler} 
                        cepEnder={this.state.cepEnder} 
                        enderecoEnder={this.state.enderecoEnder} 
                        numeroEnder={this.state.numeroEnder}
                        complementoEnder={this.state.complementoEnder}
                        bairroEnder={this.state.bairroEnder}
                        cidadeEnder={this.state.cidadeEnder}
                        estadoEnder={this.state.estadoEnder} />
                    {/* CHAMA O COMPONENTE DADOS CONT TRAB */}
                    <DadosContTrab
                        changed={this.changeHandler}
                        telContTrab={this.state.telContTrab}
                        nextelContTrab={this.state.nextelContTrab}
                        facebookContTrab={this.state.facebookContTrab}
                        emailContTrab={this.state.emailContTrab}
                        codCentroCustoContTrab={this.state.codCentroCustoContTrab}
                        cargoContTrab={this.state.cargoContTrab}
                        deptoContTrab={this.state.deptoContTrab} />
                    <FormGroup controlId="ativo-user-alt" className="fg_formaltusuario">
                        <ControlLabel id="ativo">
                            Ativo?
                        </ControlLabel>
                        <Radio name="ativoUsuario" inline value="sim" 
                            checked={this.state.ativoUsuario === "sim"}
                            onChange={e => this.changeHandler(e)}>
                            Sim
                        </Radio>
                        <Radio name="ativoUsuario" inline value="nao" 
                            checked={this.state.ativoUsuario === "nao"}
                            onChange={e => this.changeHandler(e)}>
                            Não
                        </Radio>
                    </FormGroup>
                    <FormGroup controlId="login-user-alt" className="fg_formaltusuario">
                        <ControlLabel>
                            Login
                        </ControlLabel>
                        <FormControl name="loginUsuario" type="login" placeholder="Login"
                            value={this.state.loginUsuario} onChange={e => this.changeHandler(e)} />
                    </FormGroup>
                    <FormGroup controlId="senha-user-alt" className="fg_formaltusuario esq_senha">
                        <ControlLabel>
                            Senha
                        </ControlLabel>
                        <FormControl name="senhaUsuario" type="password" placeholder="Senha"
                            value={this.state.senhaUsuario} onChange={e => this.changeHandler(e)} />
                    </FormGroup>
                    <FormGroup controlId="confsenha-user-alt" className="fg_formaltusuario dir_senha">
                        <ControlLabel>
                            Conf. Senha
                        </ControlLabel>
                        <FormControl name="confSenhaUsuario" type="password" placeholder="Confirme a senha"
                            value={this.state.confSenhaUsuario} onChange={e => this.changeHandler(e)} />
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