//CONFIGURA NÍVEL DO USUÁRIO
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import Header from '../../../comps/NavHeader';
import LayoutPesquisa from '../../../comps/LayoutPesquisa';
import { ConfigurarNivel } from '../../../comps/ConfigurarNivel';
import Footer from '../../../comps/Footer';
// IMPORTS CSS
import '../../../pages_css/Administracao/Configuracao/confignivel.css';
// IMPORTS AUXILIARES
import { FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);

//
const style = {
    overflowX: 'hidden'
};

export default class ConfigNivel extends React.Component {
    render() {
        return (
            <div className="header_confnivel" style={style}>
                <Header />
                <LayoutPesquisa>
                    <FormGroup controlId="id-usuario-config" className="formpesq_child">
                        <ControlLabel>
                            Cód. Usuário
                        </ControlLabel>
                        <FormControl className="" type="text" disabled />
                    </FormGroup>
                    
                    <FormGroup controlId="nome-usuario-config" className="formpesq_child">
                        <ControlLabel>
                            Nome
                        </ControlLabel>
                        <FormControl type="text" placeholder="Nome" />
                    </FormGroup>

                    <FormGroup controlId="nome-usuario-config" className="formpesq_child">
                        <ControlLabel>
                            Empresa
                        </ControlLabel>

                        <FormControl componentClass="select">
                            <option value="Sorocaba">Sorocaba</option>
                            <option value="Piracicaba">Sorocaba</option>
                            <option value="SJC">São José dos Campos</option>
                        </FormControl>
                    </FormGroup> 

                    <FormGroup controlId="btn-usuario-config" className="formpesq_child">
                        <Button type="" >
                            <FontAwesomeIcon icon="search"/>
                        </Button>
                    </FormGroup>
                </LayoutPesquisa>
                <ConfigurarNivel />
                <Footer />
            </div>
        );
    }
}