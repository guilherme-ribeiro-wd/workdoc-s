// RENDERIZA APENAS OS DADOS RELACIONADOS À ENDEREÇO
// CEP, ENDEREÇO, NÚMERO, COMPLEMENTO, CIDADE, BAIRRO, ESTADO
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
// IMPORTS CSS
import '../style/components_css/DadosEndereco.css';
// IMPORTS AUXILIARES
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { Estados, renderOpitions } from '../util/selectOpts';
// IMPORTS PARA ICONES

const DadosEndereco = (props) => {
    return (
        <div id="dados-endereco" className="dados_endereco">
            <Form horizontal className="form_dados_endereco">
                <div className="campos_esq">
                    <FormGroup controlId="cep" className="cep fg_dadosendereco">
                        <ControlLabel>
                            CEP
                        </ControlLabel>
                        <FormControl name="cepEnder" type="text" placeholder="CEP" 
                            value={props.cepEnder} onChange={props.changed} />
                    </FormGroup>
                    <FormGroup controlId="ender" className="ender fg_dadosendereco">
                        <ControlLabel>
                            Endereço
                        </ControlLabel>
                        <FormControl name="enderecoEnder" type="text" placeholder="Endereço" 
                            value={props.enderecoEnder} onChange={props.changed}/>
                    </FormGroup>
                    <FormGroup controlId="numender" className="numender fg_dadosendereco">
                        <ControlLabel>                        
                            Número
                        </ControlLabel>
                        <FormControl name="numeroEnder" type="text" placeholder="Número" 
                            value={props.numeroEnder} onChange={props.changed}/>
                    </FormGroup>
                    <FormGroup controlId="comple" className="comple fg_dadosendereco">
                        <ControlLabel>
                            Complemento
                        </ControlLabel>
                        <FormControl name="complementoEnder" type="text" placeholder="Complemento" 
                            value={props.complementoEnder} onChange={props.changed}/>
                    </FormGroup>
                </div>
                <div className="campos_dir">
                    <FormGroup controlId="bairro" className="bairro fg_dadosendereco">
                        <ControlLabel>                        
                            Bairro
                        </ControlLabel>
                        <FormControl name="bairroEnder" type="text" placeholder="Bairro" 
                            value={props.bairroEnder} onChange={props.changed}/>
                    </FormGroup>
                    <FormGroup controlId="cidade" className="cidade fg_dadosendereco">
                        <ControlLabel>                        
                            Cidade
                        </ControlLabel>
                        <FormControl name="cidadeEnder" type="text" placeholder="Cidade" 
                            value={props.cidadeEnder} onChange={props.changed}/>
                    </FormGroup>
                    <FormGroup controlId="estado" className="estado fg_dadosendereco">
                        <ControlLabel>                        
                            Estado
                        </ControlLabel>
                        <FormControl name="estadoEnder" componentClass="select" 
                            value={props.estadoEnder} onChange={props.changed}>
                            {renderOpitions(Estados)}
                        </FormControl>
                    </FormGroup>
                </div>
            </Form>
        </div>
    )
}

export default DadosEndereco;