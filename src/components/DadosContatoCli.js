// RENDERIZA OS CAMPOS DE CONTATO DO CLIENTE
// TELEFONE, RAMAL, EMAIL, CONTATO
// INSC. ESTADUAL, INSC. MUNICIPAL, GRUPO
// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
// IMPORTS CSS
import '../style/components_css/DadosContatoCli.css'
// IMPORTS AUXILIARES
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
// IMPORTS PARA ICONES

const DadosContatoCli = (props) => {
    return (
        <div id="dados-cont-cli" className="dados_cont_cli">
            <Form horizontal>
                <FormGroup controlId="tel-cliente-alt" className="fg_dadoscont_cli">
                    <ControlLabel>
                        Telefone
                    </ControlLabel>
                    <FormControl name="telContCli" type="tel" placeholder="Telefone"
                        value={props.telContCli} onChange={props.changed} />
                </FormGroup>
                <FormGroup controlId="ramal-cliente-alt" className="ramal_cliente_alt fg_dadoscont_cli">
                    <ControlLabel>
                        Ramal
                    </ControlLabel>
                    <FormControl name="ramalContCli" type="text" placeholder="Ramal"
                        value={props.ramalContCli} onChange={props.changed} />
                </FormGroup>
                <FormGroup controlId="email-cliente-alt" className="fg_dadoscont_cli">
                    <ControlLabel>
                        Email
                    </ControlLabel>
                    <FormControl name="emailContCli" type="email" placeholder="Email"
                        value={props.emailContCli} onChange={props.changed} />
                </FormGroup>
                <FormGroup controlId="contato-cliente-alt" className="contato_cliente_alt fg_dadoscont_cli">
                    <ControlLabel>
                        Contato
                    </ControlLabel>
                    <FormControl name="contatoContCli" type="text" placeholder="Contato"
                        value={props.contatoContCli} onChange={props.changed} />
                </FormGroup>
                <FormGroup controlId="inscest-cliente-alt" className="fg_dadoscont_cli">
                    <ControlLabel>
                        Insc. Est.
                    </ControlLabel>
                    <FormControl name="inscEstContCli" type="text" placeholder="Inscrição Estadual"
                        value={props.inscEstContCli} onChange={props.changed} />
                </FormGroup>
                <FormGroup controlId="inscmun-cliente-alt" className="inscmun_cliente_alt fg_dadoscont_cli">
                    <ControlLabel>
                        Insc. Mun.
                    </ControlLabel>
                    <FormControl name="inscMunContCli" type="text" placeholder="Inscrição Municipal"
                        value={props.inscMunContCli} onChange={props.changed} />
                </FormGroup>
                <FormGroup controlId="grupo-cliente-alt" className="fg_dadoscont_cli">
                    <ControlLabel>
                        Grupo
                    </ControlLabel>
                    <FormControl name="grupoContCli" type="text" placeholder="Grupo"
                        value={props.grupoContCli} onChange={props.changed} />
                </FormGroup>
            </Form>
        </div>
    );
}

export default DadosContatoCli;