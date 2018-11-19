// ALTERAR USUARIO
import React from 'react';
import Alterar from '../../../components/AlterarUsuario';
import Header from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
// 
const style = {
    overflow: 'hidden'
};

const AltUsuario = () => {
    return (
        <div className="header_altuser" style={style}>
            <Header />
            <Alterar />
            <Footer />
        </div>
    )
}

export default AltUsuario;