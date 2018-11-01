import React from 'react';
import { Form, FormControl, ControlLabel, FormGroup, Col, Button, Checkbox } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);


export default class ConfigurarNivel extends React.Component {
    render() {
        return (
            <div name="forms-pesq-result-usuario-config" id="forms-pesq-result-usuario-config">

                <Form inline name="pesq-usuario-config" className="pesq_usuario_config">
                    <fieldset>
                        <legend>Nível Usuário</legend>
                        <FormGroup controlId="id-usuario-config" className="id_usuario_config">
                            <ControlLabel>
                                Cód. Usuário
                            </ControlLabel>
                            <FormControl name="id-usuario-config" className="id_usuario_config" type="text" disabled />
                        </FormGroup>
                        
                        <FormGroup controlId="nome-usuario-config" className="nome_usuario_config">
                            <ControlLabel>
                                Nome
                            </ControlLabel>
                            <FormControl name="nome-usuario-config"  
                            type="text" placeholder="Nome" />
                        </FormGroup>

                        <FormGroup controlId="nome-usuario-config" className="empresa_usuario_config">
                            <ControlLabel>
                                Empresa
                            </ControlLabel>
    
                            <FormControl componentClass="select">
                                <option value="Sorocaba">Sorocaba</option>
                                <option value="Piracicaba">Sorocaba</option>
                                <option value="SJC">São José dos Campos</option>
                            </FormControl>
                        </FormGroup> 

                        <FormGroup controlId="btn-usuario-config" className="btn_pesq_config">
                            <Button type="" >
                                <FontAwesomeIcon icon="search"/>
                            </Button>
                        </FormGroup>
                    </fieldset>
                </Form>

                <Form horizontal name="result-usuario-config">
                    <FormGroup controlId="perm-usuario-result" className="perm_usuario_result">
                    {/* ARRUMAR POSIÇAO */}
                        <ControlLabel>
                            Permissões
                        </ControlLabel>
                        <div className="border_checkbox">                        
                            <Checkbox className="checkbox_percli" inline id="perm-1"> Permissão 1</Checkbox>
                            <Checkbox className="checkbox_percli" inline id="perm-2"> Permissão 2</Checkbox>
                            <Checkbox className="checkbox_percli" inline id="perm-3"> Permissão 3</Checkbox>
                            <ControlLabel></ControlLabel>
                            <Checkbox className="checkbox_percli" inline id="perm-4"> Permissão 4</Checkbox>
                            <Checkbox className="checkbox_percli" inline id="perm-5"> Permissão 5</Checkbox>
                            <Checkbox className="checkbox_percli" inline id="perm-6"> Permissão 6</Checkbox>
                            <ControlLabel></ControlLabel>
                            <Checkbox className="checkbox_percli" inline id="perm-7"> Permissão 7</Checkbox>
                            <Checkbox className="checkbox_percli" inline id="perm-8"> Permissão 8</Checkbox>
                            <Checkbox className="checkbox_percli" inline id="perm-9"> Permissão 9</Checkbox>
                        </div>

                    </FormGroup>

                    <FormGroup controlId="cli-usuario-result" className="cli_usuario_result">
                      {/* ARRUMAR POSIÇAO */}
                        <ControlLabel>
                            Clientes
                        </ControlLabel>
                        <div className="border_checkbox">
                            <Checkbox className="checkbox_percli" inline id="cli-1"> Cliente XXX</Checkbox>
                            <Checkbox className="checkbox_percli" inline id="cli-2"> Cliente XXX</Checkbox>
                            <Checkbox className="checkbox_percli" inline id="cli-3"> Cliente XXX</Checkbox>
                            <ControlLabel></ControlLabel>
                            <Checkbox className="checkbox_percli" inline id="cli-4"> Cliente XXX</Checkbox>
                            <Checkbox className="checkbox_percli" inline id="cli-5"> Cliente XXX</Checkbox>
                            <Checkbox className="checkbox_percli" inline id="cli-6"> Cliente XXX</Checkbox>
                            <ControlLabel></ControlLabel>
                            <Checkbox className="checkbox_percli" inline id="cli-7"> Cliente XXX</Checkbox>
                            <Checkbox className="checkbox_percli" inline id="cli-8"> Cliente XXX</Checkbox>
                            <Checkbox className="checkbox_percli" inline id="cli-9"> Cliente XXX</Checkbox>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}