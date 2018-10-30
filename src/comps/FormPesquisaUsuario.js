// /* COMPONENTE PARA PESQUISA LISTA USUARIO */

import React from 'react';
import { NivelUsuario as nvlUsuario } from '../util/nivelusuario';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';
import '../css-geral-comps/FormPesquisaUsuario.css';

library.add(faUsers, faSearch, faUser);

const styleForm = {
    marginTop: '5px',
    marginLeft: '75px'
}

const styleBorder = {
    borderTop: '2px solid #e7e7e7',
    marginTop: '10px'
}

export default class FormPesquisaUsuario extends React.Component {
    nvlUsuarioOpt(nvlUsr) {
        const options = [];
        nvlUsr.forEach((el, i) => {
            options.push(<option key={i} value={el}>{el}</option>)
        });
        return options;
    }
    render() {
        return (
            <div name="border" style={styleBorder}>
                <Form inline action method="get" name="pesquisa-usuario" className="pesquisa_usuario" style={styleForm}>
                    <FormGroup controlId="id-usuario-pesq" className="id_usuario_pesq_group" >
                        <ControlLabel>
                            Cód.
                        </ControlLabel>
                        <FormControl name="id-usuario-pesq" type="text" placeholder="Código" />
                    </FormGroup>

                    <FormGroup controlId="nome-usuario-pesq" className="nome_usuario_pesq_group" >
                        <ControlLabel>
                            Nome
                        </ControlLabel>
                        <FormControl name="nome-usuario-pesq" type="text" placeholder="Nome" />
                    </FormGroup>

                    <FormGroup controlId="cliente-usuario-pesq" className="cliente_usuario_pesq_group" >
                        <ControlLabel>
                            Cliente
                        </ControlLabel>
                        <FormControl name="cliente-usuario-pesq" type="text" placeholder="Cliente" />
                    </FormGroup>

                    <FormGroup controlId="nivel-usuario-pesq" className="nivel_usuario_pesq_group" >
                        <ControlLabel>
                            Nível
                        </ControlLabel>
                        <FormControl name="nivel-usuario-pesq" componentClass="select">
                            {this.nvlUsuarioOpt(nvlUsuario)}
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="status-usuario-pesq" className="status_usuario_pesq_group" >
                        <ControlLabel>
                            Status
                        </ControlLabel>
                        <FormControl name="status-usuario-pesq" componentClass="select">
                            <option>Ativo</option>
                            <option>Inativo</option>
                            <option>Todos</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="btn-usuario-pesq">
                            <Button type="" className="btn_usuario_pesq btn_pesq_fusuario" title="Pesquisar">
                                <FontAwesomeIcon icon="search" />
                            </Button> 
                    </FormGroup>

                    <FormGroup controlId="btn-usuario-incluir">
                            <Button type="" className="btn_usuario_incluir btn_pesq_fusuario" title="Incluir">
                                <FontAwesomeIcon icon="user" />
                            </Button> 
                    </FormGroup>

                    <FormGroup controlId="btn-usuario-duplicar">
                            <Button type="" className="btn_usuario_duplicar btn_pesq_fusuario" title="Duplicar">
                                <FontAwesomeIcon icon="users" />
                            </Button> 
                    </FormGroup>
                </Form>
            </div>
        );
    }
}