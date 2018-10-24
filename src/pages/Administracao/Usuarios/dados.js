//USUARIO CADASTRO
import React from 'react';
import Cadastro from '../../../comps/IncluirUsuario';
import './dados.css';
import Header from '../../../comps/NavHeader';

export default class CadUsuario extends React.Component {
    render() {
        return (
            <div name="header-cadcli">
                <Header />
                <Cadastro/>
            </div>
        )
    }
}