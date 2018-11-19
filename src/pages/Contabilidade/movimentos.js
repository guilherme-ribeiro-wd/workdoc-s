// LISTA MOVIMENTOS DE UM  CLIENTE ESPECIFICO
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import Header from '../../components/NavHeader';
import LayoutPesquisa from '../../components/LayoutPesquisa';
import Footer from '../../components/Footer';
// IMPORT CSS
import "react-table/react-table.css";
import '../../style/components_css/ReactTableAux.css';
// IMPORT AUXILIARES
import ReactTable from 'react-table';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { TipoPesqContab, renderOpitions } from '../../util/selectOpts';
import { makeData } from '../../util/movimentoCliData';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import img from '../../img/none.gif'; // img que é renderizada no lugar do botão caso o faturamento ja esteja fechado
library.add(faSearch, faPlus);
// 
const style = {
    overflowX: 'hidden'
}

export default class Movimentos extends React.Component {
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
                width: 50,
                Header: '',
                accessor: 'btnExcluir'
            },{
                width: 70,
                Header: 'Código',
                accessor: 'cod'
            }, {
                width: 270,
                Header: 'Datas (Ínicio e Fim)',
                accessor: 'datas'
            }, {
                Header: 'Tipo/Contrato',
                accessor: 'tipoContrato'
            }, {
                width: 100,
                Header: 'Competência',
                accessor: 'competencia'
            }, {
                Header: 'Previsão de pagamento',
                accessor: 'prevPgto'
            }, {
                width: 150,
                Header: 'Valor (com impostos)',
                accessor: 'valorComImpostos'
            },{
                width: 70,
                Header: 'Status',
                accessor: 'status'
            }, {
                Header: 'Editar',
                accessor: 'editar'
            }];
        return(
            <div className="header_movs" style={style}>
                <Header />
                <LayoutPesquisa>
                    <FormGroup controlId="nome-usuario-pesq" className="formpesq_child" >
                        <ControlLabel>
                            Tipo
                        </ControlLabel>
                        <FormControl componentClass="select">
                            {renderOpitions(TipoPesqContab)}
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="btn-usuario-duplicar" className="formpesq_child">
                            <Button type="" className="" title="Pesquisar">
                                <FontAwesomeIcon icon="search" />
                            </Button> 
                    </FormGroup>
                    <FormGroup controlId="btn-usuario-duplicar" className="formpesq_child">
                            <Button type="" className="">
                                <FontAwesomeIcon icon="plus" /> Incluir
                            </Button> 
                    </FormGroup>
                </LayoutPesquisa>
                <div className="canvas">
                    {/* <GraficoMovs />  COMPONENTE QUE RENDERIZA O CANVAS?*/}
                </div>
                <div className="table_movs">
                    <ReactTable data={data} columns={colunas} className="-striped -highlight"
                    previousText={this.state.previous} nextText={this.state.next} 
                    pageText={this.state.page} ofText={this.state.of} rowsText={this.state.row}
                    showPaginationTop="true" showPaginationBottom="false" resizable="false" />
                    {/* add linha com a soma total da pagina/lista  */}
                    <Footer />
                </div>
            </div>
        );
    }
}