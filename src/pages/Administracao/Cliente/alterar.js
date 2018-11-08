// CLIENTE ALTERAR 

import React from 'react';
import Alterar from '../../../comps/AlterarCliente';
import Header from '../../../comps/NavHeader';
import Footer from '../../../comps/Footer';
import '../../../pages_css/Administracao/Cliente/alterar.css';


export default class AltCliente extends React.Component {
    render() {
        return (
            <div name="header-altcli">
                <Header />
                <Alterar />
                <Footer />
            </div>
        )
    }
}