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

export default class DadosContatoCli extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            telContCli: '',
            ramalContCli: '',
            emailContCli: '',
            contatoContCli: '',
            inscEstContCli: '',
            inscMunContCli: '',
            grupoContCli: '',
        }
    }
    
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <div id="dados-cont-cli" className="dados_cont_cli">
                <Form horizontal>
                    <FormGroup controlId="tel-cliente-alt" className="fg_dadoscont_cli">
                        <ControlLabel>
                            Telefone
                        </ControlLabel>
                        <FormControl name="telContCli" type="tel" placeholder="Telefone"
                            value={this.state.telContCli} onChange={e => this.change(e)} />
                    </FormGroup>
                    <FormGroup controlId="ramal-cliente-alt" className="ramal_cliente_alt fg_dadoscont_cli">
                        <ControlLabel>
                            Ramal
                        </ControlLabel>
                        <FormControl name="ramalContCli" type="text" placeholder="Ramal"
                            value={this.state.ramalContCli} onChange={e => this.change(e)} />
                    </FormGroup>
                    <FormGroup controlId="email-cliente-alt" className="fg_dadoscont_cli">
                        <ControlLabel>
                            Email
                        </ControlLabel>
                        <FormControl name="emailContCli" type="email" placeholder="Email"
                            value={this.state.emailContCli} onChange={e => this.change(e)} />
                    </FormGroup>
                    <FormGroup controlId="contato-cliente-alt" className="contato_cliente_alt fg_dadoscont_cli">
                        <ControlLabel>
                            Contato
                        </ControlLabel>
                        <FormControl name="contatoContCli" type="text" placeholder="Contato"
                            value={this.state.contatoContCli} onChange={e => this.change(e)} />
                    </FormGroup>
                    <FormGroup controlId="inscest-cliente-alt" className="fg_dadoscont_cli">
                        <ControlLabel>
                            Insc. Est.
                        </ControlLabel>
                        <FormControl name="inscEstContCli" type="text" placeholder="Inscrição Estadual"
                            value={this.state.inscEstContCli} onChange={e => this.change(e)} />
                    </FormGroup>
                    <FormGroup controlId="inscmun-cliente-alt" className="inscmun_cliente_alt fg_dadoscont_cli">
                        <ControlLabel>
                            Insc. Mun.
                        </ControlLabel>
                        <FormControl name="inscMunContCli" type="text" placeholder="Inscrição Municipal"
                            value={this.state.inscMunContCli} onChange={e => this.change(e)} />
                    </FormGroup>
                    <FormGroup controlId="grupo-cliente-alt" className="fg_dadoscont_cli">
                        <ControlLabel>
                            Grupo
                        </ControlLabel>
                        <FormControl name="grupoContCli" type="text" placeholder="Grupo"
                            value={this.state.grupoContCli} onChange={e => this.change(e)} />
                    </FormGroup>
                </Form>
            </div>
        );
    }
}