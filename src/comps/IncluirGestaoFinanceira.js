// LISTA CLIENTES COM COLUNA BOTÃO INCLUIR -> 
// ABRIR TELA FORM CAMPOS: DATAS (VENCIMENTO, PAGAMENTO), VALOR TOTAL, IMPOSTOS E OBS.
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import LayoutForm from './LayoutForm';
// IMPORTS CSS
// IMPORTS AUXILIARES
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCheckCircle, faTimesCircle);
//
var $ = require("jquery");
require('jquery-mask-plugin');

// GF = GestãoFinanceira
export default class CadGestaoFinanceira extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            dtVencimentoGF: '',
            dtPagamentoGF: '',
            valorTotalGF: '',
            valorImpostosGF: '',
            obsGF: '',
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        $(document).ready(function($){
            $('#dtvencimento-gestao').mask('00/00/0000');
            $('#dtpgto-gestao').mask('00/00/0000');
            $('#valor-gestao').mask('R$ #.##0,00');
            $('#impostos-gestao').mask('R$ #.##0,00');
        });
        return (
            <LayoutForm>
                <FormGroup controlId="dtvencimento-gestao" className="fg_formcadgestao">
                    <ControlLabel>
                        Data Vencimento
                    </ControlLabel>
                    <FormControl type="text" placeholder="" name="dtVencimentoGF" 
                        value={this.state.dtVencimentoGF} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="dtpgto-gestao" className="fg_formcadgestao">
                    <ControlLabel>
                        Data Pagamento
                    </ControlLabel>
                    <FormControl type="text" name="dtPagamentoGF"
                        value={this.state.dtPagamentoGF} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="valor-gestao" className="fg_formcadgestao">
                    <ControlLabel>
                        Valor Total
                    </ControlLabel>
                    <FormControl type="text" name="valorTotalGF"
                        value={this.state.valorTotalGF} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="impostos-gestao" className="fg_formcadgestao">
                    <ControlLabel>
                       Valor Imposto
                    </ControlLabel>
                    <FormControl type="text" name="valorImpostosGF"
                        value={this.state.valorImpostosGF} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="obs-gestao" className="fg_formcadgestao">
                    <ControlLabel>
                        Observações
                    </ControlLabel>
                    <FormControl type="text" componentClass="textarea" name="obsGF"
                        value={this.state.obsGF} onChange={e => this.change(e)} />
                </FormGroup>
                <FormGroup controlId="btn-cad" className="fg_formcadgestao inbtn">
                    <Button type="" className="">
                        Cadastrar <FontAwesomeIcon icon="check-circle" className="icon_checkcli"/>
                    </Button> 
                </FormGroup>
                <FormGroup controlId="btn-cancel" className="fg_formcadgestao inbtn">
                    <Button type="" className="">
                        Cancelar <FontAwesomeIcon icon="times-circle" className="icon_cancelcli"/>
                    </Button> 
                </FormGroup>
            </LayoutForm>
        );
    }
}
