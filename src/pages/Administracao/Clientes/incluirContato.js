// INCLUIR UM CONTATO DE UM CLIENTE

import React from 'react';
import Cadastro from '../../../comps/IncluirContatoCliente';
import Header from '../../../comps/NavHeader';
import './incluirContato.css';


export default class CadCliente extends React.Component {
    render() {
        return (
            <div name="header-cadcontcli">
                <Header />
                <Cadastro />
            </div>
        );
    }
}