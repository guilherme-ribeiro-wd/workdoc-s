// LISTA DE CLIENTES

// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import Header from '../../../comps/NavHeader';
import LayoutPesquisa from '../../../comps/LayoutPesquisa';
import Footer from '../../../comps/Footer';
// IMPORTS CSS
import "react-table/react-table.css";
import '../../../comps_css/ReactTableAux.css';
// IMPORTS AUXILIARES
import ReactTable from 'react-table';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { makeData } from '../../../util/clienteData';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faPrint, faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faPrint, faSearch, faUser)

// 
const style = {
    overflowX: 'hidden'
};

export default class ListaCliente extends React.Component {
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
                Header: 'Nome Fantasia',
                accessor: 'nFantasia'
            }, {
                Header: 'Endereço',
                accessor: 'endereco'
            }, {
                Header: 'Caixas', // provavelmente não será uma coluna
                accessor: 'caixas'
            }, {
                Header: 'Documentos', // provavelmente não será uma coluna
                accessor: 'docs'
            }];
        return (
            <div name="header-listacli" className="header_listacli" style={style}>
                <Header />
                {/* <FormPesquisaCliente /> */}
                <LayoutPesquisa>
                    <FormGroup controlId="cliente-pesq" className="formpesq_child">
                        <ControlLabel>
                            Cliente
                        </ControlLabel>
                        <FormControl type="text" placeholder="Cliente" />
                    </FormGroup>

                    <FormGroup controlId="cidade-pesq" className="formpesq_child">
                        <ControlLabel>
                            Cidade
                        </ControlLabel>
                        <FormControl type="text" placeholder="Cidade" />
                    </FormGroup>

                    <FormGroup controlId="status-pesq" className="formpesq_child" >
                        <ControlLabel>
                            Status
                        </ControlLabel>
                        <FormControl componentClass="select">
                            <option>Ativo</option>
                            <option>Inativo</option>
                            <option>Todos</option>
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId="btn-pesq" className="formpesq_child">
                        <Button type="" className="" title="Pesquisar">
                            <FontAwesomeIcon icon="search" />
                        </Button> 
                    </FormGroup>

                    <FormGroup controlId="btn-incluir" className="formpesq_child">
                        <Button type="" className="" title="Incluir">
                            <FontAwesomeIcon icon="user" />
                        </Button> 
                    </FormGroup>

                    <FormGroup controlId="btn-relatorio" className="formpesq_child">
                        <Button type="" className="" title="Relatorio">
                            <FontAwesomeIcon icon="print" />
                        </Button> 
                    </FormGroup>
                </LayoutPesquisa>
                <ReactTable data={data} columns={colunas} className="-striped -highlight"
                previousText={this.state.previous} nextText={this.state.next} 
                pageText={this.state.page} ofText={this.state.of} rowsText={this.state.row}
                showPaginationTop="true" showPaginationBottom="false" resizable="false" />
                <Footer />
            </div>
        );
    }
}
