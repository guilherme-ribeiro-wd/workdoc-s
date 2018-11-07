// LISTA DE USUARIOS

import React from 'react';
import Header from '../../../comps/NavHeader';
// import FormPesquisaUsuario from '../../../comps/FormPesquisaUsuario'; --> será excluido?
import FormPesquisa_v2 from '../../../comps/FormPesquisa_v2'; // teste
import Footer from '../../../comps/Footer';
import '../../../css-pages/Administracao/Usuario/lista.css';
import { NivelUsuario as nvlUsuario } from '../../../util/nivelusuario';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { makeData } from '../../../util/userData';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';

export default class ListaUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: makeData(), // DADOS QUE SERÃO RENDERIZADOS NA TABELA/LISTA.
            next: 'Próximo',
            previous: 'Anterior',
            page: 'Página',
            of: 'de',
            row: 'registros'
        }
    }

    nvlUsuarioOpt(nvlUsr) {
        const options = [];
        nvlUsr.forEach((el, i) => {
            options.push(<option key={i} value={el}>{el}</option>)
        });
        return options;
    }

    render() {
        const { data } = this.state;
        const colunas = [{
                Header: 'Usuário',
                accessor: 'usuario'
            }, {
                Header: 'Nome Depto.',
                accessor: 'depto'
            }, {
                Header: 'Login',
                accessor: 'login'
            }, {
                Header: 'Cliente',
                accessor: 'cliente'
            }, {
                Header: 'Nível',
                accessor: 'nivel'
            }, {
                Header: 'Últ. Acesso',
                accessor: 'ultAcesso'
            }]
        return (
            <div name="header-listauser" className="header_listauser">
                <Header />
                {/* <FormPesquisaUsuario />  */}
                <FormPesquisa_v2>
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
                </FormPesquisa_v2>
                <ReactTable data={data} columns={colunas} className="-striped -highlight"
                previousText={this.state.previous} nextText={this.state.next} 
                pageText={this.state.page} ofText={this.state.of} rowsText={this.state.row}
                showPaginationTop="true" showPaginationBottom="false" resizable="false"/>
                <Footer />
            </div>
        );
    }
}

// CRIAR UM COMPONENTE QUE RETORNE O REACTTABLE (AQUI (LISTAUSUARIO) E LISTACLIENTE) 
// TENDO COMO PARAMETRO AS PROPS: DATA E COLUMNS