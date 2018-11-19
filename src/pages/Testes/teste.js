import React from 'react';
import Header from '../../components/NavHeader';
import Footer from '../../components/Footer';
import Email from '../../components/EmailEnviar';


const Teste = () => {
    return (
        <div className="header_email">
            <Header />
            <Email titulo="Demonstrativo" cliente="ABCDE" destinatario="abced@seila.moc"conteudo="Segue o demonstrativo do faturamento 23123" arquivo="exemplo.xlsx"/>
            <Footer />
        </div>
    );
}

export default Teste;