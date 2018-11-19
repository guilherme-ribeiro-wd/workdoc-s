// INCLUIR CLIENTE
import React from 'react';
import Cadastro from '../../../components/IncluirCliente';
import Header from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
//
const style = {
    overflowY: 'visible'
};

const CadCliente = () => {
    return (
        <div className="header_cadcli" sytle={style}>
            <Header />
            <Cadastro />
            <Footer />
        </div>
    );
}

export default CadCliente;
