/* INCLUIR ADMINISTRADORA */

import React from 'react';
import Cadastro from '../../comps/IncluirAdmistradora';
import Header from '../../comps/NavHeader';
import Footer from '../../comps/Footer';
import '../../css-pages/Administradora/incluir.css';


export default class IncluirAdmistradora extends React.Component {
    render() {
        return (
            <div name="header-cadadm">
                <Header />
                <Cadastro />
                <Footer />
            </div>
        );
    }
}