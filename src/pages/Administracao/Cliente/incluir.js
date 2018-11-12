// INCLUIR CLIENTE
import React from 'react';
import Cadastro from '../../../comps/IncluirCliente';
import Header from '../../../comps/NavHeader';
import Footer from '../../../comps/Footer';
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
