// RESULTADO PESQUISA USUARIO PRA CONFIGURAR NIVEL
import React from 'react';
import { Form, ControlLabel, FormGroup, Checkbox } from 'react-bootstrap';

export const ConfigurarNivel = () => {
    return (
        <div id="forms-result-usuario-config">
            <Form horizontal name="result-usuario-config">
                <FormGroup controlId="perm-usuario-result" className="perm_usuario_result">
                    <ControlLabel>
                        Permissões
                    </ControlLabel>
                    <div className="border_checkbox">                        
                        <Checkbox className="checkbox_percli" inline id="perm-1">Permissão 1</Checkbox>
                        <Checkbox className="checkbox_percli" inline id="perm-2">Permissão 2</Checkbox>
                        <Checkbox className="checkbox_percli" inline id="perm-3">Permissão 3</Checkbox>
                        <ControlLabel></ControlLabel>
                        <Checkbox className="checkbox_percli" inline id="perm-4">Permissão 4</Checkbox>
                        <Checkbox className="checkbox_percli" inline id="perm-5">Permissão 5</Checkbox>
                        <Checkbox className="checkbox_percli" inline id="perm-6">Permissão 6</Checkbox>
                        <ControlLabel></ControlLabel>
                        <Checkbox className="checkbox_percli" inline id="perm-7">Permissão 7</Checkbox>
                        <Checkbox className="checkbox_percli" inline id="perm-8">Permissão 8</Checkbox>
                        <Checkbox className="checkbox_percli" inline id="perm-9">Permissão 9</Checkbox>
                    </div>
                </FormGroup>

                <FormGroup controlId="cli-usuario-result" className="cli_usuario_result">
                    <ControlLabel>
                        Clientes
                    </ControlLabel>
                    <div className="border_checkbox">
                        <Checkbox className="checkbox_percli" inline id="cli-1">Cliente XXX</Checkbox>
                        <Checkbox className="checkbox_percli" inline id="cli-2">Cliente XXX</Checkbox>
                        <Checkbox className="checkbox_percli" inline id="cli-3">Cliente XXX</Checkbox>
                        <ControlLabel></ControlLabel>
                        <Checkbox className="checkbox_percli" inline id="cli-4">Cliente XXX</Checkbox>
                        <Checkbox className="checkbox_percli" inline id="cli-5">Cliente XXX</Checkbox>
                        <Checkbox className="checkbox_percli" inline id="cli-6">Cliente XXX</Checkbox>
                        <ControlLabel></ControlLabel>
                        <Checkbox className="checkbox_percli" inline id="cli-7">Cliente XXX</Checkbox>
                        <Checkbox className="checkbox_percli" inline id="cli-8">Cliente XXX</Checkbox>
                        <Checkbox className="checkbox_percli" inline id="cli-9">Cliente XXX</Checkbox>
                    </div>
                </FormGroup>
            </Form>
        </div>
    );
}