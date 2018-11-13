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

// ATUAL--->>>>>
export default class CadGestaoFinanceira extends React.Component {
    render() {
        $(document).ready(function($){
            $('#valor-gestao').mask('R$ #.##0,00');
        });
        return (
            <LayoutForm>
                <FormGroup controlId="dtvencimento-gestao" className="fg_formcadgestao">
                    <ControlLabel>
                        Data Vencimento
                    </ControlLabel>
                    <FormControl type="date" placeholder="" />
                </FormGroup>
                <FormGroup controlId="dtpgto-gestao" className="fg_formcadgestao">
                    <ControlLabel>
                        Data Pagamento
                    </ControlLabel>
                    <FormControl type="date" placeholder="" />
                </FormGroup>
                <FormGroup controlId="valor-gestao" className="fg_formcadgestao">
                    <ControlLabel>
                        Valor Total
                    </ControlLabel>
                    <FormControl type="text" placeholder="" />
                </FormGroup>
                <FormGroup controlId="impostos-gestao" className="fg_formcadgestao">
                    <ControlLabel>
                       Valor Imposto
                    </ControlLabel>
                    <FormControl type="text" placeholder="" />
                </FormGroup>
                <FormGroup controlId="obs-gestao" className="fg_formcadgestao">
                    <ControlLabel>
                        Observações
                    </ControlLabel>
                    <FormControl type="text" placeholder=""  componentClass="textarea"/>
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
