// LISTA CLIENTES COM COLUNA BOTÃO INCLUIR -> 
// ABRIR TELA FORM CAMPOS: DATAS (VENCIMENTO, PAGAMENTO), VALOR TOTAL, IMPOSTOS E OBS.
// LISTA CLIENTE PARA GESTAO FINANCEIRA
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import Header from '../../components/NavHeader';
import LayoutPesquisa from '../../components/LayoutPesquisa';
import Footer from '../../components/Footer';
// import Gestao from '../../components/GerarNotaFiscal'; ----> POP-UP FORM
// IMPORTS CSS
import "react-table/react-table.css";
import '../../style/components_css/ReactTableAux.css';
// IMPORTS AUXILIARES
import ReactTable from 'react-table';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { makeData } from '../../util/cliGestaoData';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);
// 
const style = {
    overflowX: 'hidden'
}
export default class  ListaCliGestaoFinc extends React.Component {
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
            Header: 'Qtde. Faturamentos',
            accessor: 'qtdeFat'
        }, {
            Header: '',
            accessor: 'btn'
        }];
        return (
            <div className="header_gestaofinc" style={style}>
                <Header />
                <LayoutPesquisa>
                    <FormGroup controlId="cliente-pesq-cligestao" className="formpesq_child">
                        <ControlLabel>
                            Cliente
                        </ControlLabel>
                        <FormControl type="text" placeholder="Cliente"/>
                    </FormGroup>
                    <FormGroup controlId="btn-pesq-cligestao" className="formpesq_child">
                        <Button className="" title="Pesquisar">
                            <FontAwesomeIcon icon="search"/>
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
