// LISTA CLIENTES COM COLUNA BOTÃO INCLUIR -> 
// ABRIR TELA FORM CAMPOS: DATAS (VENCIMENTO, PAGAMENTO), VALOR TOTAL, IMPOSTOS E OBS.
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
import LayoutForm from './LayoutForm';
// IMPORTS CSS
// IMPORTS AUXILIARES
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add();
//
var $ = require("jquery");
require('jquery-mask-plugin');

// ATUAL--->>>>>
export default class CadGestaoFinanceira extends React.Component {
    render() {
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
                       Impostos?
                    </ControlLabel>
                    <FormControl type="text" placeholder="" />
                </FormGroup>
                <FormGroup controlId="valor-gestao" className="fg_formcadgestao">
                    <ControlLabel>
                        Observações
                    </ControlLabel>
                    <FormControl type="text" placeholder=""  componentClass="textarea"/>
                </FormGroup>
                <FormGroup controlId="btn-cancel" className="fg_formcadgestao inbtn">
                    <Button type="" className="">
                        Cadastrar <FontAwesomeIcon icon="times-circle" className="icon-cancel-cli"/>
                    </Button> 
                </FormGroup>
                <FormGroup controlId="btn-cancel" className="fg_formcadgestao inbtn">
                    <Button type="" className="">
                        Cancelar <FontAwesomeIcon icon="times-circle" className="icon-cancel-cli"/>
                    </Button> 
                </FormGroup>
            </LayoutForm>
        );
    }
}
