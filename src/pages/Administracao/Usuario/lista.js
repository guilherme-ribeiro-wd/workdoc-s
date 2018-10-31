// LISTA DE USUARIOS

import React from 'react';
import Header from '../../../comps/NavHeader';
import FormPesquisaUsuario from '../../../comps/FormPesquisaUsuario';
import InfoPage from '../../../comps/InfoPage';
import Lista from '../../../comps/Lista';
import Footer from '../../../comps/Footer';
import '../../../css-pages/Administracao/Usuario/lista.css';

// TESTE REACT-TABLE 
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { makeData } from '../../../util/userData';

export default class ListaUsuario extends React.Component {
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
                Header: 'Usuário',
                accessor: 'usuario'
            }, {
                Header: 'Nome Depto.',
                accessor: 'depto'
            }, {
                Header: 'Login',
                accessor: 'login'
            }, {
                Header: 'Cliente',
                accessor: 'cliente'
            }, {
                Header: 'Nível',
                accessor: 'nivel'
            }, {
                Header: 'Últ. Acesso',
                accessor: 'ultAcesso'
            }]
        return (
            <div name="header-listauser" className="header_listauser">
                <Header />
                <FormPesquisaUsuario /> 
                {/* SE FOR UTILIZAR REACT-TABLE O COMPONENTE INFO-PAGE NÃO SERÁ NECESSÁRIO.
                    REACT-TABLE JÁ UTILIZA SUAS FUNCIONALIDADES */}
                {/* <InfoPage />  */}
                {/* <Lista t1="Usuário" t2="Nome Depto." t3="Login" t4="Cliente" t5="Nível" t6="Últ. Acesso"
                       v1="Teste" v2="Tester" v3="Teste1234" v4="Teste Ltda." v5="++++++++++" v6="22/03/2011" /> */}
                <ReactTable data={data} columns={colunas} className="-striped -highlight"
                previousText={this.state.previous} nextText={this.state.next} 
                pageText={this.state.page} ofText={this.state.of} rowsText={this.state.row}
                showPaginationTop="true" showPaginationBottom="false" resizable="false"/>
                <Footer />
            </div>
        );
    }
}

// CRIAR UM COMPONENTE QUE RETORNE O REACTTABLE (AQUI (LISTAUSUARIO) E LISTACLIENTE) 
// TENDO COMO PARAMETRO AS PROPS: DATA E COLUMNS