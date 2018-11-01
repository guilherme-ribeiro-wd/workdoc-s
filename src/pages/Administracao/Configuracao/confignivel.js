/* CONFIGURA NÍVEL DO USUÁRIO */

import React from 'react';
import Header from '../../../comps/NavHeader';
import Footer from '../../../comps/Footer';
import ConfigurarNivel from '../../../comps/ConfigurarNivel';
import '../../../css-pages/Administracao/Configuracao/confignivel.css';


export default class ConfigNivel extends React.Component {
    render() {
        return (
            <div className="header_confnivel">
                <Header />
                <ConfigurarNivel />
                <Footer />
            </div>
        );
    }
}