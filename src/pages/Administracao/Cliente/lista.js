// LISTA DE CLIENTES

import React from 'react';
import Header from '../../../comps/NavHeader';
// import FormPesquisaCliente from '../../../comps/FormPesquisaCliente'; --> será excluido?
import FormPesquisa_v2 from '../../../comps/FormPesquisa_v2'; // teste
import Footer from '../../../comps/Footer';
import '../../../css-pages/Administracao/Cliente/lista.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { makeData } from '../../../util/clienteData';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
            <div name="header-listacli" className="header_listacli">
                <Header />
                {/* <FormPesquisaCliente /> */}
                <FormPesquisa_v2>

                </FormPesquisa_v2>
                <ReactTable data={data} columns={colunas} className="-striped -highlight"
                previousText={this.state.previous} nextText={this.state.next} 
                pageText={this.state.page} ofText={this.state.of} rowsText={this.state.row}
                showPaginationTop="true" showPaginationBottom="false" resizable="false" />
                <Footer />
            </div>
        );
    }
}


// CRIAR UM COMPONENTE QUE RETORNE O REACTTABLE (AQUI (LISTACLIENTE) E LISTAUSUARIO) 
// TENDO COMO PARAMETRO AS PROPS: DATA E COLUMNS