// GERAR NOTA FISCAL
import React from 'react';
import GerarNotaFiscal from '../../comps/GerarNotaFiscal';
import Header from '../../comps/NavHeader';
import Footer from '../../comps/Footer';
import '../../pages_css/NotaFiscal/gerarNotaFiscal.css';

const style = {
    overflowX: 'hidden'
};

const GerarNF = () => {
    return (
        <div className="header_gerarnf" style={style}>
            <Header />
            <GerarNotaFiscal cliente="ABCDE" faturamento="teste" competencia="22/22/2222" vencimento="1 dia(s) a partir da emissão (05/11/2018)" />
            <Footer /> 
        </div>
    );
}

export default GerarNF;