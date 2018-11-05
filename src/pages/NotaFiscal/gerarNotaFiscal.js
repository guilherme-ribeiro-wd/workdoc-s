import React from 'react';
import GerarNotaFiscal from '../../comps/GerarNotaFiscal';
import '../../css-pages/NotaFiscal/gerarNotaFiscal.css';
import Header from '../../comps/NavHeader';
import Footer from '../../comps/Footer';


export default class GerarNF extends React.Component {
    render() {
        return (
            <div className="header_gerarnf">
                <Header />
                <GerarNotaFiscal cliente="ABCDE" faturamento="teste" competencia="22/22/2222" vencimento="1 dia(s) a partir da emissão (05/11/2018)" />
                <Footer /> 
            </div>
        );
    }
}