// TELA PRINCIPAL DA AREA ADMINISTRAÇÃO
// POR ONDE É ACESSADO AS OPÇÕES REFERENTE À ADMINISTRAÇÃO, EX: CADASTRO CLIENTE, CADASTRO USUARIO.
import React from 'react';
import Header from '../../components/NavHeader';
import PrincipalAdministracao from '../../components/PrincipalAdministracao';
import Footer from '../../components/Footer';
import '../../style/pages_css/Administracao/principal.css';

const PrincipalAdm = () =>{
    return (
        <div className="principal_adm">
            <Header />
            <PrincipalAdministracao />
            <Footer />
        </div>
    );
}

export default PrincipalAdm;
