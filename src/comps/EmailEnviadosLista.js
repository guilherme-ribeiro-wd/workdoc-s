// LISTA EMAIL ENVIADOS
// UTILIZARÁ FORM PESQUISA E REACT-TABLE: ENTÃO SERÁ FEITO DEPOIS DA OTIMIZAÇÃO DOS COMPONENTES.
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import Header from './NavHeader';
import LayoutPesquisa from './LayoutPesquisa';
import Footer from './Footer';
// IMPORTS CSS
import '../comps_css/Email.css';
import "react-table/react-table.css";
import '../comps_css/ReactTableAux.css';
// IMPORTS AUXILIARES
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import ReactTable from 'react-table';
import { makeData } from '../util/emailEnviadoData';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faSearch, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
library.add(faEye, faSearch, faPlus, faMinus);
//
const style = {
    overflowX: 'hidden',
}

export default class ListaEmailEnviados extends React.Component {
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
            width: 30,
            Header: '',
            accessor: 'btn'
        }, {
            Header: 'Cliente',
            accessor: 'cliente'
        }, {
            Header: 'Competência',
            accessor: 'competencia'
        }, { 
            Header: 'Produto',
            accessor: 'produto'
        }, { 
            Header: 'Assunto',
            accessor: 'assunto'
        }, {
            Header: 'Envio',
            accessor: 'envio'
        }];
        return (
            <div className="header_emailenviados" style={style}>
                <Header />
                <LayoutPesquisa>
                    <FormGroup controlId="cliente-ee-pesq" className="formpesq_child" >
                        <ControlLabel>
                            Cliente
                        </ControlLabel>
                        <FormControl type="text" placeholder="Cliente" />
                    </FormGroup>
                    <FormGroup controlId="competencia-ee-pesq" className="formpesq_child" >
                        <ControlLabel>
                            Competência
                        </ControlLabel>
                        <FormControl type="text" placeholder="Competência" />
                    </FormGroup>
                    <FormGroup controlId="btn-usuario-pesq" className="formpesq_child">
                        <Button type="" className="" title="Pesquisar">
                            <FontAwesomeIcon icon="search" />
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
