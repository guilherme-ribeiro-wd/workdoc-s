// TELA PRINCIPAL DA AREA ADMINISTRAÇÃO
// POR ONDE É ACESSADO AS OPÇÕES REFERENTE À ADMINISTRAÇÃO, EX: CADASTRO CLIENTE, CADASTRO USUARIO.

import React from 'react';
import Header from '../../comps/NavHeader';
import PrincipalAdministracao from '../../comps/PrincipalAdministracao';
import Footer from '../../comps/Footer';
import '../../css-pages/Administracao/principal.css';

export default class PrincipalAdm extends React.Component {
    render() {
        return (
            <div name="principal-adm" className="principal_adm">
                <Header />
                <PrincipalAdministracao />
                <Footer />
            </div>
        );
    }
}
