// LISTA DE CLIENTES

import React from 'react';
import Header from '../../../comps/NavHeader';
import Lista from '../../../comps/Lista';
import Footer from '../../../comps/Footer';
import '../../../css-pages/Administracao/Cliente/lista.css';

export default class ListaCliente extends React.Component {
    render() {
        return (
            <div name="header-listacli">
                <Header />
                <Lista />
                {/* <Footer /> */}
            </div>
        );
    }
}