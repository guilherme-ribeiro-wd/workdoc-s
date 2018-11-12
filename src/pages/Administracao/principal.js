// TELA PRINCIPAL DA AREA ADMINISTRAÇÃO
// POR ONDE É ACESSADO AS OPÇÕES REFERENTE À ADMINISTRAÇÃO, EX: CADASTRO CLIENTE, CADASTRO USUARIO.
import React from 'react';
import Header from '../../comps/NavHeader';
import PrincipalAdministracao from '../../comps/PrincipalAdministracao';
import Footer from '../../comps/Footer';
import '../../pages_css/Administracao/principal.css';

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
