// INCLUIR USUARIO
import React from 'react';
import Cadastro from '../../../comps/IncluirUsuario';
import Header from '../../../comps/NavHeader';
import Footer from '../../../comps/Footer';
// 
const style = {
    overflowX: 'hidden'
};

const CadUsuario = () => {
    return (
        <div className="header_cadcli" style={style}>
            <Header />
            <Cadastro />
            <Footer />
        </div>
    )
}

export default CadUsuario;