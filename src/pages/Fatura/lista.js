// LISTA FATURAMENTOS - CRITERIO PESQUISA

import React from 'react';
import Header from '../../comps/NavHeader';
import { FormPesquisaFaturamento } from '../../comps/FormPesquisaFaturamento';
import Footer from '../../comps/Footer';
// import '../../../css-pages/Fatura/lista.css';

import ReactTable from 'react-table';
import "react-table/react-table.css";
import { makeData } from '../../../util/faturamentoData';

export default class ListaFaturamento extends React.Component {
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
            Header: 'Cliente',
            accessor: 'cliente'
        }, {
            Header: 'Código',
            accessor: 'codigo'
        }, {
            Header: 'Competência',
            accessor: 'competencia'
        }, {
            Header: 'Previsão Pagamento',
            accessor: 'prevPag'
        }, {
            Header: 'Tipo/Contrato',
            accessor: 'tipoContrato'
        }, {
            Header: 'Total',
            accessor: 'total' //ADD BOTÕES
        }];
        return (
            <div className="header_listafaturamento">
                <Header />
                <FormPesquisaFaturamento />
                <ReactTable data={data} columns={colunas} className="-striped -highlight"
                previousText={this.state.previous} nextText={this.state.next} 
                pageText={this.state.page} ofText={this.state.of} rowsText={this.state.row}
                showPaginationTop="true" showPaginationBottom="false" resizable="false" />
                <Footer />
            </div>
        );
    }
}