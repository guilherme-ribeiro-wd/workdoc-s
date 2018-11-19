// ALTERAR CLIENTE 
import React from 'react';
import Alterar from '../../../components/AlterarCliente';
import Header from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
//
const style = {
    overflowX: 'hidden'
};

const AltCliente = () => {
    return (
        <div className="header_altcli" style={style}>
            <Header />
            <Alterar />
            <Footer />
        </div>
    )
}

export default AltCliente;