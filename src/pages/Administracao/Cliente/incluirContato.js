// INCLUIR UM CONTATO DE UM CLIENTE

import React from 'react';
import Cadastro from '../../../comps/IncluirContatoCliente';
import Header from '../../../comps/NavHeader';
import Footer from '../../../comps/Footer';
import '../../../css-pages/Administracao/Cliente/incluirContato.css';


export default class CadCliente extends React.Component {
    render() {
        return (
            <div name="header-cadcontcli">
                <Header />
                <Cadastro />
                <Footer />
            </div>
        );
    }
}