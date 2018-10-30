// LISTA DE CLIENTES

import React from 'react';
import Header from '../../../comps/NavHeader';
import FormPesquisaCliente from '../../../comps/FormPesquisaCliente';
import InfoPage from '../../../comps/InfoPage';
import Lista from '../../../comps/Lista';
import Footer from '../../../comps/Footer';
import '../../../css-pages/Administracao/Cliente/lista.css';

export default class ListaCliente extends React.Component {
    render() {
        return (
            <div name="header-listacli">
                <Header />
                <FormPesquisaCliente />
                <InfoPage />
                <Lista  t1="teste" t2="" t3="teste" t4="" t5="teste" t6="teste"/>
                {/* <Footer /> */}
            </div>
        );
    }
}