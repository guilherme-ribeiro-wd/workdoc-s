import React from 'react';
import Header from '../../comps/NavHeader';
import Footer from '../../comps/Footer';
import Email from '../../comps/EmailEnviar';


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