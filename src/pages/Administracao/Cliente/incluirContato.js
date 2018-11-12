// INCLUIR UM CONTATO DE UM CLIENTE
import React from 'react';
import Cadastro from '../../../comps/IncluirContatoCliente';
import Header from '../../../comps/NavHeader';
import Footer from '../../../comps/Footer';
// 
const style = {
    overflowX: 'hidden'
};

const CadContatoCliente = () => {
    return (
        <div className="header_cadcontcli" style={style}>
            <Header />
            <Cadastro />
            <Footer />
        </div>
    );
}

export default CadContatoCliente;