import React from 'react';
import Header from '../../comps/NavHeader';
import Footer from '../../comps/Footer';
import Email from '../../comps/Email';


const Teste = () => {
    return (
        <div>
            <Header />
            <Email title="Demonstrativo" cliente="ABCDE" destinatario="abced@seila.moc"conteudo="Segue o demonstrativo do faturamento 23123" anexo=""/>
            {/* WARINING EMAIL -> HTML CANNOT APPEAR AS CHILD OF DIV */}
            {/* <Footer /> */}
        </div>
    );
}

export default Teste;