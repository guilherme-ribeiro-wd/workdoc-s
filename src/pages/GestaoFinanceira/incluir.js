// INCLUIR GESTÃO FINANCEIRA
import React from 'react';
import Cadastro from '../../components/IncluirGestaoFinanceira';
import Header from '../../components/NavHeader';
import Footer from '../../components/Footer';
// 
const style = {
    overflowX: 'hidden'
};

const CadGestaoFinanc = () => {
    return (
        <div className="header_cadgestao" style={style}>
            <Header />
            <Cadastro />
            <Footer />
        </div>
    );
}

export default CadGestaoFinanc;