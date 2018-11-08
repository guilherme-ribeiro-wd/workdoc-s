// RENDERIZA APENAS OS DADOS RELACIONADOS À ENDEREÇO
// CEP, ENDEREÇO, NÚMERO, COMPLEMENTO, CIDADE, BAIRRO, ESTADO
import { Estados, renderOpitions } from '../util/selectOpts';
import React from 'react';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import '../comps_css/DadosEndereco.css'

var $ = require("jquery");
require('jquery-mask-plugin');

export default class DadosEndereco extends React.Component {
    render() {
        $(document).ready(function($) {
            $('#cep').mask('99999-999'); // FUNÇÃO BUSCA CEP - TODO
        });
        return (
            <div id="dados-endereco" className="dados_endereco">
                <Form horizontal className="form_dados_endereco">
                    <FormGroup controlId="cep" className="cep teste6">
                        <ControlLabel>
                            CEP
                        </ControlLabel>
                        <FormControl type="text" placeholder="CEP" />
                    </FormGroup>
                    <FormGroup controlId="ender" className="ender teste6">
                        <ControlLabel>
                            Endereço
                        </ControlLabel>
                        <FormControl type="text" placeholder="Endereço" />
                    </FormGroup>
                    <FormGroup controlId="numender" className="numender teste6">
                        <ControlLabel>                        
                            Número
                        </ControlLabel>
                        <FormControl type="text" placeholder="Número" />
                    </FormGroup>
                    <FormGroup controlId="comple" className="comple teste6">
                        <ControlLabel>
                            Complemento
                        </ControlLabel>
                        <FormControl type="text" placeholder="Complemento" />
                    </FormGroup>
                    <FormGroup controlId="bairro" className="bairro teste6">
                        <ControlLabel>                        
                            Bairro
                        </ControlLabel>
                        <FormControl type="text" placeholder="Bairro" />
                    </FormGroup>
                    <FormGroup controlId="cidade" className="cidade teste6">
                        <ControlLabel>                        
                            Cidade
                        </ControlLabel>
                        <FormControl type="text" placeholder="Cidade" />
                    </FormGroup>
                    <FormGroup controlId="estado" className="estado teste6">
                        <ControlLabel>                        
                            Estado
                        </ControlLabel>
                        <FormControl componentClass="select">
                            {renderOpitions(Estados)}
                        </FormControl>
                        {/* CRIAR DIVS: DISPLAY: INLINE-BLOCK */}
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
