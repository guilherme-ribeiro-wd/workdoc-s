// EXIBE AS ADMINISTRADORAS PARA SELECIONAR E IR PRA DASHBOARD
import React from 'react';
import Header from '../../comps/NavHeader';
import SelAdm from '../../comps/SelecionarAdministradora';
import './selecionarAdm.css';

import logo1 from '../../img/logotipo-sel.gif'
import logo2 from '../../img/logotipo-sel2.gif';
import logo3 from '../../img/logotipo-sel3.gif';


export default class SelecionarAdm extends React.Component {
    render() {
        return (
            <div name="">
               <Header />
               <SelAdm logo={logo1} nomeEmpresa="001. Sorocaba"/> 
               <SelAdm logo={logo2} nomeEmpresa="002. Piracicaba"/> 
               <SelAdm logo={logo3} nomeEmpresa="003. São Jose"/> 
            </div>
        );
    }
}

