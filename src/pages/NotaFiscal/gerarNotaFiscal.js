// GERAR NOTA FISCAL
import React from 'react';
import GerarNotaFiscal from '../../components/GerarNotaFiscal';
import Header from '../../components/NavHeader';
import Footer from '../../components/Footer';
import '../../style/pages_css/NotaFiscal/gerarNotaFiscal.css';

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