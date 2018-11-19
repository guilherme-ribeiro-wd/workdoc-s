// RENDERIZA APENAS OS DADOS RELACIONADOS À ENDEREÇO
// CEP, ENDEREÇO, NÚMERO, COMPLEMENTO, CIDADE, BAIRRO, ESTADO
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
// IMPORTS CSS
import '../style/components_css/DadosEndereco.css';
// IMPORTS AUXILIARES
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { Estados, renderOpitions } from '../util/selectOpts';
var $ = require("jquery");
require('jquery-mask-plugin');
// IMPORTS PARA ICONES

export default class DadosEndereco extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            cepEnder: '',
            enderecoEnder: '',
            numeroEnder: '',
            complementoEnder: '',
            bairroEnder: '',
            cidadeEnder: '',
            estadoEnder: '',
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        $(document).ready(function($) {
            $('#cep').mask('99999-999'); // FUNÇÃO BUSCA CEP - TODO
        });
        return (
            <div id="dados-endereco" className="dados_endereco">
                <Form horizontal className="form_dados_endereco">
                    <div className="campos_esq">
                        <FormGroup controlId="cep" className="cep fg_dadosendereco">
                            <ControlLabel>
                                CEP
                            </ControlLabel>
                            <FormControl name="cepEnder" type="text" placeholder="CEP" 
                                value={this.state.cepEnder} onChange={e => this.change(e) } />
                        </FormGroup>
                        <FormGroup controlId="ender" className="ender fg_dadosendereco">
                            <ControlLabel>
                                Endereço
                            </ControlLabel>
                            <FormControl name="enderecoEnder" type="text" placeholder="Endereço" 
                                value={this.state.enderecoEnder} onChange={e => this.change(e) }/>
                        </FormGroup>
                        <FormGroup controlId="numender" className="numender fg_dadosendereco">
                            <ControlLabel>                        
                                Número
                            </ControlLabel>
                            <FormControl name="numeroEnder" type="text" placeholder="Número" 
                                value={this.state.numeroEnder} onChange={e => this.change(e) }/>
                        </FormGroup>
                        <FormGroup controlId="comple" className="comple fg_dadosendereco">
                            <ControlLabel>
                                Complemento
                            </ControlLabel>
                            <FormControl name="complementoEnder" type="text" placeholder="Complemento" 
                                value={this.state.complementoEnder} onChange={e => this.change(e) }/>
                        </FormGroup>
                    </div>
                    <div className="campos_dir">
                        <FormGroup controlId="bairro" className="bairro fg_dadosendereco">
                            <ControlLabel>                        
                                Bairro
                            </ControlLabel>
                            <FormControl name="bairroEnder" type="text" placeholder="Bairro" 
                                value={this.state.bairroEnder} onChange={e => this.change(e) }/>
                        </FormGroup>
                        <FormGroup controlId="cidade" className="cidade fg_dadosendereco">
                            <ControlLabel>                        
                                Cidade
                            </ControlLabel>
                            <FormControl name="cidadeEnder" type="text" placeholder="Cidade" 
                                value={this.state.cidadeEnder} onChange={e => this.change(e) }/>
                        </FormGroup>
                        <FormGroup controlId="estado" className="estado fg_dadosendereco">
                            <ControlLabel>                        
                                Estado
                            </ControlLabel>
                            <FormControl name="estadoEnder" componentClass="select" 
                                value={this.state.estadoEnder} onChange={e => this.change(e) }>
                                {renderOpitions(Estados)}
                            </FormControl>
                        </FormGroup>
                    </div>
                </Form>
            </div>
        )
    }
}
