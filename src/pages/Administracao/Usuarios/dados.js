//USUARIO CADASTRO
import React from 'react';
import Cadastro from '../../../comps/IncluirUsuario';
import Header from '../../../comps/NavHeader';
import './dados.css';

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