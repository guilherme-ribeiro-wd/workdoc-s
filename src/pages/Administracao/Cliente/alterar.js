// ALTERAR CLIENTE 
import React from 'react';
import Alterar from '../../../comps/AlterarCliente';
import Header from '../../../comps/NavHeader';
import Footer from '../../../comps/Footer';
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