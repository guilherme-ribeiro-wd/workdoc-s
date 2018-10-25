// CLIENTE ALTERAR 

import React from 'react';
import Alterar from '../../../comps/AlterarCliente';
import Header from '../../../comps/NavHeader';
import './dadosAlterar.css';


export default class AltCliente extends React.Component {
    render() {
        return (
            <div name="header-altcli">
                <Header />
                <Alterar />
            </div>
        )
    }
}