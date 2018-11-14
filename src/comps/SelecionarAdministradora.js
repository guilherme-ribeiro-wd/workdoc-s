import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding, faFile, faBox, faUsers } from '@fortawesome/free-solid-svg-icons';
library.add(faUsers, faBuilding, faBox, faFile);

export default class SelecionarAdministradora extends React.Component {
    render() {
        return (
            // TABELA ??????
            // BLOCO OLD STYLE style="margin-left:10px;display:inline-table;height:170px;margin:5px;"
            <div className="sel_adm">
                <div className="header_seladm">
                    <a href="#">
                        <img src={this.props.logo} alt="logo"></img>
                    </a>
                </div>
                {/* CONTEUDO OLD STYLE -> style="text-align:center;" */}
                <div className="conteudo_seladm">
                    <div className="nome_seladm">
                        <a href="#">
                            {this.props.nomeEmpresa}
                        </a>
                    </div>
                    {/* STATS TOP OLD STYLE -> style="margin-top:10px;" */}
                    <div className="stats_seladm">
                    {/* STATS OLD STYLE -> style="text-align:left;padding-left:25px;" */}
                        <div className="stats">
                            <FontAwesomeIcon icon="users" className="icons"></FontAwesomeIcon>
                            {this.props.clientes} CLIENTES
                        </div>
                        <div className="stats">
                            <FontAwesomeIcon icon="building" className="icons"></FontAwesomeIcon>
                            {this.props.filiais} FILIAIS
                        </div>
                        <div className="stats">
                            <FontAwesomeIcon icon="box" className="icons"></FontAwesomeIcon>
                            {this.props.caixas} CAIXAS
                        </div>
                        <div className="stats">
                            <FontAwesomeIcon icon="file" className="icons"></FontAwesomeIcon>
                            {this.props.docs} DOCS
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}