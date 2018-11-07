import React, {Component} from 'react';
import Header from '../../comps/NavHeader';
import PesquisaCliente from '../../comps/FaturamentoClienteLista';
import Footer from '../../comps/Footer';
import '../../css-pages/Fatura/faturamentoCliente.css';
// import { extname } from 'path';

import ReactTable from 'react-table';
import "react-table/react-table.css";
import { makeData } from '../../util/faturamentoClienteData';

export default class FaturamentoCliente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: makeData(), // DADOS QUE SERÃO RENDERIZADOS NA TABELA/LISTA.
            next: 'Próximo',
            previous: 'Anterior',
            page: 'Página',
            of: 'de',
            row: 'registros',
            noData: 'Não existem Clientes cadastrados ou para este critério de busca.'
        }
    }
    render() {
        const { data } = this.state;
        const colunas = [{
            Header: 'Cliente',
            accessor: 'cliente'
        }, {
            Header: 'Observação',
            accessor: 'obs'
        }, {
            Header: 'Pedido',
            accessor: 'pedido'
        }, {
            Header: '',
            accessor: 'btn'
        }];
        return (
            <div className="header_listaclifaturamento">
                <Header />
                <PesquisaCliente />
                <ReactTable data={data} columns={colunas} className="-striped -highlight"
                previousText={this.state.previous} nextText={this.state.next} 
                pageText={this.state.page} ofText={this.state.of} rowsText={this.state.row}
                showPaginationTop="true" showPaginationBottom="false" resizable="false" noDataText={this.state.noData} />
                <Footer />
            </div>
        );
    }
}