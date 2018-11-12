// LISTA USUARIOS
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import Header from '../../../comps/NavHeader';
import LayoutPesquisa from '../../../comps/LayoutPesquisa';
import Footer from '../../../comps/Footer';
// IMPORT CSS
import "react-table/react-table.css";
import '../../../comps_css/ReactTableAux.css';
// IMPORT AUXILIARES
import ReactTable from 'react-table';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { NvlUsuarioOpt, renderOpitions } from '../../../util/selectOpts';
import { makeData } from '../../../util/userData';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faSearch, faUsers } from '@fortawesome/free-solid-svg-icons';
library.add(faUser, faSearch, faUsers);
// 
const style = {
    overflowX: 'hidden'
};

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
            }];
        return (
            <div name="header-listauser" className="header_listauser" style={style}>
                <Header />
                {/* <FormPesquisaUsuario />  */}
                <LayoutPesquisa>
                    <FormGroup controlId="id-usuario-pesq" className="formpesq_child" >
                        <ControlLabel>
                            Cód.
                        </ControlLabel>
                        <FormControl type="text" placeholder="Código" />
                    </FormGroup>

                    <FormGroup controlId="nome-usuario-pesq" className="formpesq_child" >
                        <ControlLabel>
                            Nome
                        </ControlLabel>
                        <FormControl type="text" placeholder="Nome" />
                    </FormGroup>

                    <FormGroup controlId="cliente-usuario-pesq" className="formpesq_child" >
                        <ControlLabel>
                            Cliente
                        </ControlLabel>
                        <FormControl type="text" placeholder="Cliente" />
                    </FormGroup>

                    <FormGroup controlId="nivel-usuario-pesq" className="formpesq_child" >
                        <ControlLabel>
                            Nível
                        </ControlLabel>
                        <FormControl componentClass="select">
                            {renderOpitions(NvlUsuarioOpt)}
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="status-usuario-pesq" className="formpesq_child" >
                        <ControlLabel>
                            Status
                        </ControlLabel>
                        <FormControl componentClass="select">
                            <option>Ativo</option>
                            <option>Inativo</option>
                            <option>Todos</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="btn-usuario-pesq" className="formpesq_child">
                            <Button type="" className="" title="Pesquisar">
                                <FontAwesomeIcon icon="search" />
                            </Button> 
                    </FormGroup>

                    <FormGroup controlId="btn-usuario-incluir" className="formpesq_child">
                            <Button type="" className="" title="Incluir">
                                <FontAwesomeIcon icon="user" />
                            </Button> 
                    </FormGroup>

                    <FormGroup controlId="btn-usuario-duplicar" className="formpesq_child">
                            <Button type="" className="" title="Duplicar">
                                <FontAwesomeIcon icon="users" />
                            </Button> 
                    </FormGroup>
                </LayoutPesquisa>
                <ReactTable data={data} columns={colunas} className="-striped -highlight"
                previousText={this.state.previous} nextText={this.state.next} 
                pageText={this.state.page} ofText={this.state.of} rowsText={this.state.row}
                showPaginationTop="true" showPaginationBottom="false" resizable="false"/>
                <Footer />
            </div>
        );
    }
}