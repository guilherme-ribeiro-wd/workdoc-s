// RENDERIZA APENAS OS DADOS RELACIONADOS A CONTATO E TRABALHO
// TELEFONE, NEXTEL, EMAIL, FACEBOOK ---- CONTATO
// CODIGO CENTRO DE CUSTO, CARGO, DEPARTAMENTO ---- TRABALHO

// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
// IMPORTS CSS
import '../comps_css/DadosContTrab.css'
// IMPORTS AUXILIARES
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
var $ = require("jquery");
require('jquery-mask-plugin');
// IMPORTS PARA ICONES

export default class DadosContTrab extends React.Component {
    render() {
        $(document).ready(function($){
            $('#tel').mask('+55 99 9999-9999')
        });
        return (
            <div id="dados-cont-trab" className="dados_cont_trab">
                <Form horizontal>
                    <FormGroup controlId="tel" className="tel fg_dadoscont_trab">
                        <ControlLabel>
                            Telefone
                        </ControlLabel>
                        <FormControl type="tel" placeholder="Telefone"/>
                    </FormGroup>
                    <FormGroup controlId="nextel" className="nextel fg_dadoscont_trab">
                        <ControlLabel>
                            Nextel
                        </ControlLabel>
                        <FormControl type="tel" placeholder="Nextel"/>
                    </FormGroup>
                    <FormGroup controlId="fb" className="fb_ fg_dadoscont_trab">
                        <ControlLabel>
                            Facebook.com/
                        </ControlLabel>
                        <FormControl type="text" placeholder="Facebook"/>
                    </FormGroup>
                    <FormGroup controlId="email" className="email_ fg_dadoscont_trab">
                        <ControlLabel>
                            Email
                        </ControlLabel>
                        <FormControl type="email" placeholder="Email"/>
                    </FormGroup>
                    <FormGroup controlId="codcentro" className="codcentro fg_dadoscont_trab">
                        <ControlLabel>
                            Cód. Centro Custo
                        </ControlLabel>
                        <FormControl type="text" placeholder="Código Centro de Custo"/>
                    </FormGroup>
                    <FormGroup controlId="cargo" className="cargo fg_dadoscont_trab">
                        <ControlLabel>
                            Cargo
                        </ControlLabel>
                        <FormControl type="text" placeholder="Cargo"/>
                    </FormGroup>
                    <FormGroup controlId="depto" className="depto fg_dadoscont_trab">
                        <ControlLabel>
                            Depto.
                        </ControlLabel>
                        {/* VALOR VIRIA CARREGADO */}
                        <FormControl type="text" placeholder="Departamento"/>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}