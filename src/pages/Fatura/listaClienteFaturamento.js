// LISTA DE CLIENTES PARA FATURAMENTO
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import Header from '../../comps/NavHeader';
import LayoutPesquisa from '../../comps/LayoutPesquisa';
import Footer from '../../comps/Footer';
// IMPORTS CSS
import '../../comps_css/ReactTableAux.css';
import "react-table/react-table.css";
// IMPORTS AUXILIARES
import ReactTable from 'react-table';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { makeData } from '../../util/faturamentoClienteData';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);

// 
const style = {
    overflowX: 'hidden'
}

export default class ListaCliFaturamento extends React.Component {
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
            <div className="header_listaclifaturamento" style={style}>
                <Header />
                <LayoutPesquisa>
                    <FormGroup controlId="cliente-pesq-clifaturamento" className="formpesq_child">
                        <ControlLabel>
                            Cliente
                        </ControlLabel>
                        <FormControl type="text" placeholder="Cliente"/>
                    </FormGroup>
                    <FormGroup controlId="btn-pesq-clifaturamento" className="formpesq_child">
                        <Button className="" title="Pesquisar">
                            <FontAwesomeIcon icon="search"/>
                        </Button>
                    </FormGroup>
                </LayoutPesquisa>
                <ReactTable data={data} columns={colunas} className="-striped -highlight"
                previousText={this.state.previous} nextText={this.state.next} 
                pageText={this.state.page} ofText={this.state.of} rowsText={this.state.row}
                showPaginationTop="true" showPaginationBottom="false" resizable="false" noDataText={this.state.noData} />
                <Footer />
            </div>
        );
    }
}