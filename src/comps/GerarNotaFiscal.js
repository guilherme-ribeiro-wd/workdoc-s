import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShareSquare, faListUl, faEye, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';
import { reverse } from 'dns';
var $ = require("jquery");
require('jquery-mask-plugin');

library.add(faShareSquare, faListUl, faEye, faFileAlt);


export default class GerarNotaFiscal extends React.Component {
    render() {
        $(document).ready(function($) {
            $('#campovalor-nf').mask('R$ #.###.##0,00', {reverse: true});
        });
        return (
            <div className="div_gerarnf">
                <div className="header_nf">
                    <Button>E-mail Demonstrativo<FontAwesomeIcon icon="share-square" /></Button>
                    <Button>Gerar Relatório<FontAwesomeIcon icon="list-ul" /></Button>
                    <Button>Pré-visualiza NFe<FontAwesomeIcon icon="eye" /></Button>
                    <Button>Gerar NFe<FontAwesomeIcon icon="file-alt" /></Button>
                </div>
                <div className="contentform_nf">
                    <Form>
                        <div className="obscliente_nf">
                            Observações Cliente: {this.props.cliente}
                        </div>
                        <div className="infofat_nf">
                            <ControlLabel>Faturamento:{this.props.faturamento}</ControlLabel>
                            <ControlLabel>Competência:{this.props.competencia}</ControlLabel>
                            <ControlLabel>Vencimento:{this.props.vencimento}</ControlLabel>
                        </div>
                        <div className="campos_nf">
                            <FormGroup controlId="campoid-nf" className="campos_ib">
                                <ControlLabel>Id</ControlLabel>
                                <FormControl name="campoid-nf" type="text" disabled />
                            </FormGroup>
                            <FormGroup controlId="campovalor-nf" className="campos_ib">
                                <ControlLabel>Valor</ControlLabel>
                                <FormControl name="campovalor-nf" type="text" />
                            </FormGroup>
                            <br />
                            <FormGroup controlId="campocontato-nf" className="campos_ib">
                                <ControlLabel>Contato</ControlLabel>
                                <FormControl name="campocontato-nf" type="text" placeholder="Contato" />
                            </FormGroup>
                            <FormGroup controlId="campoemail-nf" className="campos_ib">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl name="campoemail-nf" type="text" placeholder="Email" />
                            </FormGroup>
                            {/* COLOCAR BOTÃO ADD CONTATO- REMOVE CONTATO */}
                            <FormGroup controlId="campodesc-nf" className="desc_nf">
                                <ControlLabel>Descrição</ControlLabel>
                                <FormControl name="campodesc-nf" type="text" />
                            </FormGroup>
                            <FormGroup controlId="campoitem-nf" className="">
                                <ControlLabel>Item</ControlLabel>
                                <FormControl name="campoitem-nf" type="text" />
                            </FormGroup>
                            <FormGroup controlId="campoqtde-nf" className="">
                                <ControlLabel>Qtde.</ControlLabel>
                                <FormControl name="campoqtde-nf" type="text" />
                            </FormGroup>
                            <FormGroup controlId="campovlrunit-nf" className="">
                                <ControlLabel>Valor Unit.</ControlLabel>
                                <FormControl name="campovlrunit-nf" type="text" />
                            </FormGroup>
                            <FormGroup controlId="campovlrtotal-nf" className="">
                                <ControlLabel>Valor Total</ControlLabel>
                                <FormControl name="campovlrtotal-nf" type="text" />
                            </FormGroup>
                            <FormGroup controlId="campocnae-nf" className="">
                                <ControlLabel>Cnae</ControlLabel>
                                <FormControl name="campocnae-nf" componentClass="select">
                                    <option></option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="camporeciss-nf" className="">
                                <ControlLabel>Recolhimento Iss</ControlLabel>
                                <FormControl name="camporeciss-nf" componentClass="select">
                                    <option></option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="campotributacao-nf" className="">
                                <ControlLabel>Tributacao</ControlLabel>
                                <FormControl name="campotributacao-nf" componentClass="select">
                                    <option></option>
                                </FormControl>
                            </FormGroup>
                            <FormGroup controlId="campolocalserv-nf" className="">
                                {/*  Opções baseadas no cliente*/}
                                <ControlLabel>Local de prestação de serviço</ControlLabel>
                                <FormControl name="campolocalserv-nf" componentClass="select">
                                    <option></option>
                                </FormControl>
                            </FormGroup>
                            {/* 6 CHECKBOX -> 
                            PIS: 0,650
                            CONFINS: 3,000
                            INSS: 11,000
                            IR: 1,500
                            CSLL: 1,000
                            Iss: 5,000 */}
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}