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
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            telContTrab: '',
            nextelContTrab: '',
            facebookContTrab: '',
            emailContTrab: '',
            codCentroCustoContTrab: '',
            cargoContTrab: '',
            deptoContTrab: '',
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

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
                        <FormControl name="telContTrab" type="tel" placeholder="Telefone"
                            value={this.state.telContTrab} onChange={e => this.change(e)} />
                    </FormGroup>
                    <FormGroup controlId="nextel" className="nextel fg_dadoscont_trab">
                        <ControlLabel>
                            Nextel
                        </ControlLabel>
                        <FormControl name="nextelContTrab" type="tel" placeholder="Nextel"
                            value={this.state.nextelContTrab} onChange={e => this.change(e)} />
                    </FormGroup>
                    <FormGroup controlId="fb" className="fb_ fg_dadoscont_trab">
                        <ControlLabel>
                            Facebook.com/
                        </ControlLabel>
                        <FormControl name="facebookContTrab" type="text" placeholder="Facebook"
                            value={this.state.facebookContTrab} onChange={e => this.change(e)} />
                    </FormGroup>
                    <FormGroup controlId="email" className="email_ fg_dadoscont_trab">
                        <ControlLabel>
                            Email
                        </ControlLabel>
                        <FormControl name="emailContTrab" type="email" placeholder="Email"
                            value={this.state.emailContTrab} onChange={e => this.change(e)} />
                    </FormGroup>
                    <FormGroup controlId="codcentro" className="codcentro fg_dadoscont_trab">
                        <ControlLabel>
                            Cód. Centro Custo
                        </ControlLabel>
                        <FormControl name="codCentroCustoContTrab" type="text" placeholder="Código Centro de Custo"
                            value={this.state.codCentroCustoContTrab} onChange={e => this.change(e)} />
                    </FormGroup>
                    <FormGroup controlId="cargo" className="cargo fg_dadoscont_trab">
                        <ControlLabel>
                            Cargo
                        </ControlLabel>
                        <FormControl name="cargoContTrab" type="text" placeholder="Cargo"
                        value={this.state.cargoContTrab} onChange={e => this.change(e)} />
                    </FormGroup>
                    <FormGroup controlId="depto" className="depto fg_dadoscont_trab">
                        <ControlLabel>
                            Depto.
                        </ControlLabel>
                        {/* VALOR VIRIA CARREGADO */}
                        <FormControl name="deptoContTrab" type="text" placeholder="Departamento"
                        value={this.state.deptoContTrab} onChange={e => this.change(e)} />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}