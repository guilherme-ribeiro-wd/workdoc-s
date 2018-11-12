// LISTA FATURAMENTOS - CRITERIO PESQUISA - DE UM CLIENTE
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
import { makeData } from '../../util/faturamentoData';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCalculator } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch, faCalculator);
// 
const style = {
    overflowX: 'hidden'
};

const btn_style = {
    width: '120px'
};

export default class ListaFaturamento extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: makeData(), // DADOS QUE SERÃO RENDERIZADOS NA TABELA/LISTA.
            next: 'Próximo',
            previous: 'Anterior',
            page: 'Página',
            of: 'de',
            row: 'registros',
            noData: 'Não existe Faturamento para este cliente ou para esse critério de busca.'
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
            accessor: 'total'
        }, {
            Header: '',
            accessor: 'btn'
        }];
        return (
            <div className="header_listafaturamento" style={style}>
                <Header />
                <LayoutPesquisa>
                    <FormGroup controlId="codcontab-pesq" className="formpesq_child">
                        <ControlLabel>
                            Cod. Contab
                        </ControlLabel>
                        <FormControl name="codcontab-pesq" type="text" placeholder="Código" />
                    </FormGroup>
                    <FormGroup controlId="compet-pesq" className="formpesq_child">
                        <ControlLabel>
                            Competência
                        </ControlLabel>
                        <FormControl name="compet-pesq" type="text" placeholder="Competência" />
                    </FormGroup>
                    <FormGroup controlId="btn-pesq" className="formpesq_child">
                        <Button type="" className="" title="Pesquisar">
                            <FontAwesomeIcon icon="search" />
                        </Button> 
                    </FormGroup>
                    <FormGroup controlId="btn-contab" className="formpesq_child">
                        <Button type="" className="" title="Contabilidade" style={btn_style}>
                            Contabilidade <FontAwesomeIcon icon="calculator" />
                        </Button> 
                    </FormGroup>
                </LayoutPesquisa>
                <ReactTable data={data} columns={colunas} className="-striped -highlight"
                previousText={this.state.previous} nextText={this.state.next} 
                pageText={this.state.page} ofText={this.state.of} rowsText={this.state.row}
                showPaginationTop="true" showPaginationBottom="false" resizable="false" 
                noDataText={this.state.noData} />
                <Footer />
            </div>
        );
    }
}