// INCLUIR UM CONTATO DE UM CLIENTE
import React from 'react';
import Cadastro from '../../../components/IncluirContatoCliente';
import Header from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
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