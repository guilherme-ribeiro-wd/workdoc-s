// LISTA DE USUARIOS

import React from 'react';
import Header from '../../../comps/NavHeader';
import FormPesquisaUsuario from '../../../comps/FormPesquisaUsuario';
import InfoPage from '../../../comps/InfoPage';
import Lista from '../../../comps/Lista';
import Footer from '../../../comps/Footer';
import '../../../css-pages/Administracao/Usuario/lista.css';

export default class ListaUsuario extends React.Component {
    render() {
        return (
            <div name="header-listauser">
                <Header />
                <FormPesquisaUsuario />
                <InfoPage />
                <Lista t1="teste" t2="teste" t3="teste" t4="teste" t5="teste" t6="teste"/>
                {/* <Footer /> */}
            </div>
        );
    }
}