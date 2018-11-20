// RENDERIZA APENAS OS DADOS RELACIONADOS A CONTATO E TRABALHO
// TELEFONE, NEXTEL, EMAIL, FACEBOOK ---- CONTATO
// CODIGO CENTRO DE CUSTO, CARGO, DEPARTAMENTO ---- TRABALHO
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
// IMPORTS CSS
import '../style/components_css/DadosContTrab.css'
// IMPORTS AUXILIARES
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
var $ = require("jquery");
require('jquery-mask-plugin');
// IMPORTS PARA ICONES

const DadosContTrab = (props) => {
    return (
        <div id="dados-cont-trab" className="dados_cont_trab">
            <Form horizontal>
                <FormGroup controlId="tel" className="tel fg_dadoscont_trab">
                    <ControlLabel>
                        Telefone
                    </ControlLabel>
                    <FormControl name="telContTrab" type="tel" placeholder="Telefone"
                        value={props.telContTrab} onChange={props.changed} />
                </FormGroup>
                <FormGroup controlId="nextel" className="nextel fg_dadoscont_trab">
                    <ControlLabel>
                        Nextel
                    </ControlLabel>
                    <FormControl name="nextelContTrab" type="tel" placeholder="Nextel"
                        value={props.nextelContTrab} onChange={props.changed} />
                </FormGroup>
                <FormGroup controlId="fb" className="fb_ fg_dadoscont_trab">
                    <ControlLabel>
                        Facebook.com/
                    </ControlLabel>
                    <FormControl name="facebookContTrab" type="text" placeholder="Facebook"
                        value={props.facebookContTrab} onChange={props.changed} />
                </FormGroup>
                <FormGroup controlId="email" className="email_ fg_dadoscont_trab">
                    <ControlLabel>
                        Email
                    </ControlLabel>
                    <FormControl name="emailContTrab" type="email" placeholder="Email"
                        value={props.emailContTrab} onChange={props.changed} />
                </FormGroup>
                <FormGroup controlId="codcentro" className="codcentro fg_dadoscont_trab">
                    <ControlLabel>
                        Cód. Centro Custo
                    </ControlLabel>
                    <FormControl name="codCentroCustoContTrab" type="text" placeholder="Código Centro de Custo"
                        value={props.codCentroCustoContTrab} onChange={props.changed} />
                </FormGroup>
                <FormGroup controlId="cargo" className="cargo fg_dadoscont_trab">
                    <ControlLabel>
                        Cargo
                    </ControlLabel>
                    <FormControl name="cargoContTrab" type="text" placeholder="Cargo"
                    value={props.cargoContTrab} onChange={props.changed} />
                </FormGroup>
                <FormGroup controlId="depto" className="depto fg_dadoscont_trab">
                    <ControlLabel>
                        Depto.
                    </ControlLabel>
                    {/* VALOR VIRIA CARREGADO */}
                    <FormControl name="deptoContTrab" type="text" placeholder="Departamento"
                    value={props.deptoContTrab} onChange={props.changed} />
                </FormGroup>
            </Form>
        </div>
    )
}

export default DadosContTrab;