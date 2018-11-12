// INCLUIR ADMINISTRADORA
import React from 'react';
import Cadastro from '../../comps/IncluirAdmistradora';
import Header from '../../comps/NavHeader';
import Footer from '../../comps/Footer';
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