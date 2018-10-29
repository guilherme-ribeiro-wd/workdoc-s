// USUARIO ALTERAR

import React from 'react';
import Alterar from '../../../comps/AlterarUsuario';
import Header from '../../../comps/NavHeader';
import Footer from '../../../comps/Footer';
import '../../../css-pages/Administracao/Cliente/alterar.css';

export default class AltUsuario extends React.Component {
    render() {
        return (
            <div name="header-altuser">
                <Header />
                <Alterar />
                <Footer />
            </div>
        )
    }
}