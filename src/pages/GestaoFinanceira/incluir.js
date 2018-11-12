// INCLUIR GESTÃO FINANCEIRA
import React from 'react';
import Cadastro from '../../comps/IncluirGestaoFinanceira';
import Header from '../../comps/NavHeader';
import Footer from '../../comps/Footer';
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