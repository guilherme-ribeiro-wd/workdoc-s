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
import { faEye } from '@fortawesome/free-solid-svg-icons';
library.add(faEye);
//

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
            Header: '',
            accessor: ''
        }, {
            Header: '',
            accessor: ''
        }, {
            Header: '',
            accessor: ''
        }];
        return (
            <div className="email_enviados">
                <Header />
                <LayoutPesquisa>
                    
                </LayoutPesquisa>
                <ReactTable data={data} column={colunas} className="-striped -highlight"
                previousText={this.state.previous} nextText={this.state.next} 
                pageText={this.state.page} ofText={this.state.of} rowsText={this.state.row}
                showPaginationTop="true" showPaginationBottom="false" resizable="false" />
                <Footer />
            </div>
        );
    }
}