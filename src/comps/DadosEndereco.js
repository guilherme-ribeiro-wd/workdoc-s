// RENDERIZA APENAS OS DADOS RELACIONADOS À ENDEREÇO
// CEP, ENDEREÇO, NÚMERO, COMPLEMENTO, CIDADE, BAIRRO, ESTADO
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
// IMPORTS CSS
import '../comps_css/DadosEndereco.css';
// IMPORTS AUXILIARES
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { Estados, renderOpitions } from '../util/selectOpts';
var $ = require("jquery");
require('jquery-mask-plugin');
// IMPORTS PARA ICONES


export default class DadosEndereco extends React.Component {
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
                            <FormControl type="text" placeholder="CEP" />
                        </FormGroup>
                        <FormGroup controlId="ender" className="ender fg_dadosendereco">
                            <ControlLabel>
                                Endereço
                            </ControlLabel>
                            <FormControl type="text" placeholder="Endereço" />
                        </FormGroup>
                        <FormGroup controlId="numender" className="numender fg_dadosendereco">
                            <ControlLabel>                        
                                Número
                            </ControlLabel>
                            <FormControl type="text" placeholder="Número" />
                        </FormGroup>
                        <FormGroup controlId="comple" className="comple fg_dadosendereco">
                            <ControlLabel>
                                Complemento
                            </ControlLabel>
                            <FormControl type="text" placeholder="Complemento" />
                        </FormGroup>
                    </div>
                    <div className="campos_dir">
                    <FormGroup controlId="bairro" className="bairro fg_dadosendereco">
                        <ControlLabel>                        
                            Bairro
                        </ControlLabel>
                        <FormControl type="text" placeholder="Bairro" />
                    </FormGroup>
                    <FormGroup controlId="cidade" className="cidade fg_dadosendereco">
                        <ControlLabel>                        
                            Cidade
                        </ControlLabel>
                        <FormControl type="text" placeholder="Cidade" />
                    </FormGroup>
                    <FormGroup controlId="estado" className="estado fg_dadosendereco">
                        <ControlLabel>                        
                            Estado
                        </ControlLabel>
                        <FormControl componentClass="select">
                            {renderOpitions(Estados)}
                        </FormControl>
                    </FormGroup>
                    </div>
                </Form>
            </div>
        )
    }
}
