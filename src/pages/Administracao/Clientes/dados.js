// CLIENTE INCLUIR

import React from 'react';
import Cadastro from '../../../comps/IncluirCliente';
import Header from '../../../comps/NavHeader';
import './dados.css';


export default class CadCliente extends React.Component {
    render() {
        return (
            <div name="header-cadcli">
                <Header />
                <Cadastro />
            </div>
        );
    }
}