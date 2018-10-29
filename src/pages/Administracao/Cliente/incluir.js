// CLIENTE INCLUIR

import React from 'react';
import Cadastro from '../../../comps/IncluirCliente';
import Header from '../../../comps/NavHeader';
import Footer from '../../../comps/Footer';
import '../../../css-pages/Administracao/Cliente/incluir.css';


export default class CadCliente extends React.Component {
    render() {
        return (
            <div name="header-cadcli">
                <Header />
                <Cadastro />
                <Footer />
            </div>
        );
    }
}