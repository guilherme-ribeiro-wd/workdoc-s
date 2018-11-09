// CLIENTE INCLUIR

import React from 'react';
import Cadastro from '../../../comps/IncluirCliente';
import Header from '../../../comps/NavHeader';
import Footer from '../../../comps/Footer';
// import '../../../pages_css/Administracao/Cliente/incluir.css';

const style = {
    overflowY: 'visible'
}

export default class CadCliente extends React.Component {
    render() {
        return (
            <div className="header_cadcli" sytle={style}>
                <Header />
                <Cadastro />
                <Footer />
            </div>
        );
    }
}
