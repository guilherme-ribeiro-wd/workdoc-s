// LISTA DE CLIENTES

import React from 'react';
import Header from '../../../comps/NavHeader';
import FormPesquisaCliente from '../../../comps/FormPesquisaCliente';
import InfoPage from '../../../comps/InfoPage';
import Lista from '../../../comps/Lista';
import Footer from '../../../comps/Footer';
import '../../../css-pages/Administracao/Cliente/lista.css';

// TESTE REACT-TABLE 
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { makeData } from '../../../util/clienteData';

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
                <FormPesquisaCliente />
                {/* <InfoPage /> */}
                {/* CAIXAS E DOCUMENTOS PROVAVELMENTE NÃO SERÃO OS DADOS A SEREM EXIBIDOS AQUI */}
                {/* <Lista  t1="Nome Fantasia" t2="" t3="Endereço" t4="" t5="Caixas?" t6="Documentos?"
                        v1="Teste" v2="" v3="Teste 123" v4="" v5="231311" v6="22311" /> */}
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