// RENDERIZA OS CAMPOS DE CONTATO DO CLIENTE
// TELEFONE, RAMAL, EMAIL, CONTATO
// INSC. ESTADUAL, INSC. MUNICIPAL, GRUPO

// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
// IMPORTS CSS
import '../comps_css/DadosContatoCli.css'
// IMPORTS AUXILIARES
import { Form, FormControl, FormGroup, Col, ControlLabel } from 'react-bootstrap';
// IMPORTS PARA ICONES


export default class DadosContatoCli extends React.Component {
    render() {
        return (
            <div id="dados-cont-cli" className="dados_cont_cli">
                <Form horizontal>
                    <FormGroup controlId="tel-cliente-alt" className="tel_cliente_alt fg_dadoscont_cli">
                        <ControlLabel>
                            Telefone
                        </ControlLabel>
                        <FormControl type="tel" placeholder="Telefone" />
                    </FormGroup>
                    <FormGroup controlId="ramal-cliente-alt" className="ramal_cliente_alt fg_dadoscont_cli">
                        <ControlLabel>
                            Ramal
                        </ControlLabel>
                        <FormControl type="text" placeholder="Ramal" />
                    </FormGroup>
                    <FormGroup controlId="email-cliente-alt" className="email_cliente_alt fg_dadoscont_cli">
                        <ControlLabel>
                            Email
                        </ControlLabel>
                        <FormControl type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup controlId="contato-cliente-alt" className="contato_cliente_alt fg_dadoscont_cli">
                        <ControlLabel>
                            Contato
                        </ControlLabel>
                        <FormControl type="text" placeholder="Contato" />
                    </FormGroup>
                    <FormGroup controlId="inscest-cliente-alt" className="inscest_cliente_alt fg_dadoscont_cli">
                        <ControlLabel>
                            Insc. Est.
                        </ControlLabel>
                        <FormControl type="text" placeholder="Inscrição Estadual" />
                    </FormGroup>
                    <FormGroup controlId="inscmun-cliente-alt" className="inscmun_cliente_alt fg_dadoscont_cli">
                        <ControlLabel>
                            Insc. Mun.
                        </ControlLabel>
                        <FormControl type="text" placeholder="Inscrição Municipal" />
                    </FormGroup>
                    <FormGroup controlId="grupo-cliente-alt" className="grupo_cliente_alt fg_dadoscont_cli">
                        <ControlLabel>
                            Grupo
                        </ControlLabel>
                        <FormControl type="text" placeholder="Grupo" />
                    </FormGroup>
                </Form>
            </div>
        );
    }
}