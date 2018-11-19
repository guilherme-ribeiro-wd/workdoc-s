// GERAR NOTA FISCAL
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
// IMPORTS CSS
// IMPORTS AUXILIARES
import { CnaeOpt, RecolhimentoOpt, LocalServOpt, TributacaoOpt, renderOpitions } from '../util/selectOpts';
import { Button, Form, FormGroup, FormControl, ControlLabel, Checkbox, Radio } from 'react-bootstrap';
import { reverse } from 'dns';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShareSquare, faListUl, faEye, faFileAlt } from '@fortawesome/free-solid-svg-icons';
// 
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
                    <Button className="btn_nf">E-mail Demonstrativo<FontAwesomeIcon icon="share-square" /></Button>
                    <Button className="btn_nf">Gerar Relatório<FontAwesomeIcon icon="list-ul" /></Button>
                    <Button className="btn_nf">Pré-visualizar NFe<FontAwesomeIcon icon="eye" /></Button>
                    <Button className="btn_nf">Gerar NFe<FontAwesomeIcon icon="file-alt" /></Button>
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
                                <FormControl name="campodesc-nf" type="text" componentClass="textarea" placeholder="Descrição"/>
                            </FormGroup>
                            {/* ITENM */}
                            <div className="item_nf">
                                <FormGroup controlId="campoitem-nf" className="item_nf">
                                    <ControlLabel>Item</ControlLabel>
                                    <FormControl name="campoitem-nf" type="text" />
                                </FormGroup>

                                <FormGroup controlId="campoqtde-nf" className="item_nf item_pos item_pos_qtde">
                                    <ControlLabel>Qtde.</ControlLabel>
                                    <FormControl name="campoqtde-nf" type="text" />
                                </FormGroup>

                                <FormGroup controlId="campovlrunit-nf" className="item_nf item_pos item_pos_unit">
                                    <ControlLabel>Valor Unit.</ControlLabel>
                                    <FormControl name="campovlrunit-nf" type="text" />
                                </FormGroup>

                                <FormGroup controlId="campovlrtotal-nf" className="item_nf item_pos">
                                    <ControlLabel>Valor Total</ControlLabel>
                                    <FormControl name="campovlrtotal-nf" type="text" />
                                </FormGroup>
                            </div>
                            {/* ITEM */}
                            <FormGroup controlId="campocnae-nf" className="">
                                <ControlLabel>Cnae</ControlLabel>
                                <FormControl name="campocnae-nf" componentClass="select">
                                    {renderOpitions(CnaeOpt)}
                                </FormControl>
                            </FormGroup>

                            <FormGroup controlId="camporeciss-nf" className="">
                                <ControlLabel>Recolhimento Iss</ControlLabel>
                                <FormControl name="camporeciss-nf" componentClass="select">
                                    {renderOpitions(RecolhimentoOpt)}
                                </FormControl>
                            </FormGroup>

                            <FormGroup controlId="campotributacao-nf" className="">
                                <ControlLabel>Tributacao</ControlLabel>
                                <FormControl name="campotributacao-nf" componentClass="select">
                                    {renderOpitions(TributacaoOpt)}
                                </FormControl>
                            </FormGroup>

                            <FormGroup controlId="campolocalserv-nf" className="">
                                {/*  Opções baseadas no cliente*/}
                                <ControlLabel>Local de prestação de serviço</ControlLabel>
                                <FormControl name="campolocalserv-nf" componentClass="select">
                                    {renderOpitions(LocalServOpt)}
                                </FormControl>
                            </FormGroup>

                            <FormGroup controlId="rad-uni-fat" className="">
                                <ControlLabel id="rad-uni-fat">
                                    Separar por unidade Faturamento
                                </ControlLabel>
                                <Radio name="uniFatRadio" inline>Sim</Radio>{' '}
                                <Radio name="uniFatRadio" inline>Não</Radio>
                            </FormGroup>
                        
                            <FormGroup controlId="chkimposto-nf" className="chkimposto_nf">
                                <div className="left_chk">
                                    <ControlLabel className="chk_lbl">Pis</ControlLabel>
                                    <Checkbox className="chk_box" id="imp-1">
                                        <FormControl type="text" className="chk_value" disabled value="0,650" />
                                    </Checkbox>
                                    <ControlLabel className="chk_lbl">Confins</ControlLabel>
                                    <Checkbox className="chk_box" id="imp-2">
                                        <FormControl type="text" className="chk_value" disabled value="3,000" />
                                    </Checkbox>
                                    <ControlLabel className="chk_lbl">Inss</ControlLabel>
                                    <Checkbox className="chk_box" id="imp-3">
                                        <FormControl type="text" className="chk_value" disabled value="11,000" />
                                    </Checkbox>
                                </div>
                                <div className="right_chk">
                                    <ControlLabel className="chk_lbl">Ir</ControlLabel>
                                    <Checkbox className="chk_box" id="imp-4">
                                        <FormControl type="text" className="chk_value" disabled value="1,500" />
                                    </Checkbox>
                                    <ControlLabel className="chk_lbl">Csll</ControlLabel>
                                    <Checkbox className="chk_box" id="imp-5">
                                        <FormControl type="text" className="chk_value" disabled value="1,000" />
                                    </Checkbox>
                                    <ControlLabel className="chk_lbl">Iss</ControlLabel>
                                    <Checkbox className="chk_box" id="imp-6">
                                        <FormControl type="text" className="chk_value" disabled value="5,000" />
                                    </Checkbox>
                                </div>
                            </FormGroup>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}