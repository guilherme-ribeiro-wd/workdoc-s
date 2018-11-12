// ALTERAR USUARIO
import React from 'react';
import Alterar from '../../../comps/AlterarUsuario';
import Header from '../../../comps/NavHeader';
import Footer from '../../../comps/Footer';
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