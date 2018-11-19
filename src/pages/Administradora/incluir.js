// INCLUIR ADMINISTRADORA
import React from 'react';
import Cadastro from '../../components/IncluirAdmistradora';
import Header from '../../components/NavHeader';
import Footer from '../../components/Footer';
//
const style = {
    overflowX: 'hidden'
};

const IncluirAdmistradora = () => {
    return (
        <div className="header_cadadm" style={style}>
            <Header />
            <Cadastro />
            <Footer />
        </div>
    );
}

export default IncluirAdmistradora;