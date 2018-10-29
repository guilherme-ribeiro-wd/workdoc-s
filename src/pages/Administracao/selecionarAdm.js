// EXIBE AS ADMINISTRADORAS PARA SELECIONAR E IR PRA DASHBOARD
import React from 'react';
import Header from '../../comps/NavHeader';
import Footer from '../../comps/Footer';
import SelAdm from '../../comps/SelecionarAdministradora';
import '../../css-pages/Administracao/selecionarAdm.css';

import logo1 from '../../img/logotipo-sel.gif'
import logo2 from '../../img/logotipo-sel2.gif';
import logo3 from '../../img/logotipo-sel3.gif';


export default class SelecionarAdm extends React.Component {
    render() {
        return (
            <div>
                <div name="header-seladm">
                    <Header />
                    <SelAdm logo={logo1} nomeEmpresa="001. Sorocaba" 
                    clientes="20" filiais="13" caixas="22" docs="103"/> 
                    <SelAdm logo={logo2} nomeEmpresa="002. Piracicaba" 
                    clientes="1" filiais="3" caixas="17" docs="450"/> 
                    <SelAdm logo={logo3} nomeEmpresa="003. São Jose"
                    clientes="1" filiais="1" caixas="2" docs="67"/>
                </div>
                <div className="footer_comp">
                    <Footer />
                </div>
            </div>
        );
    }
}

