// INCLUIR USUARIO
import React from 'react';
import Cadastro from '../../../components/IncluirUsuario';
import Header from '../../../components/NavHeader';
import Footer from '../../../components/Footer';
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