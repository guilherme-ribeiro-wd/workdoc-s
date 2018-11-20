// $(document).ready(function($) {
    //     $('#cep').mask('99999-999'); // FUNÇÃO BUSCA CEP - TODO
    // }
{/*
constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    // this.state = {
    //     cepEnder: '',
    //     enderecoEnder: '',
    //     numeroEnder: '',
    //     complementoEnder: '',
    //     bairroEnder: '',
    //     cidadeEnder: '',
    //     estadoEnder: '',
    // }
}

changeHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
}

<div id="dados-endereco" className="dados_endereco">
    <Form horizontal className="form_dados_endereco">
        <div className="campos_esq">
            <FormGroup controlId="cep" className="cep fg_dadosendereco">
                <ControlLabel>
                    CEP
                </ControlLabel>
                <FormControl name="cepEnder" type="text" placeholder="CEP" 
                    value={this.state.cepEnder} onChange={e => this.changeHandler(e) } />
            </FormGroup>
            <FormGroup controlId="ender" className="ender fg_dadosendereco">
                <ControlLabel>
                    Endereço
                </ControlLabel>
                <FormControl name="enderecoEnder" type="text" placeholder="Endereço" 
                    value={this.state.enderecoEnder} onChange={e => this.changeHandler(e) }/>
            </FormGroup>
            <FormGroup controlId="numender" className="numender fg_dadosendereco">
                <ControlLabel>                        
                    Número
                </ControlLabel>
                <FormControl name="numeroEnder" type="text" placeholder="Número" 
                    value={this.state.numeroEnder} onChange={e => this.changeHandler(e) }/>
            </FormGroup>
            <FormGroup controlId="comple" className="comple fg_dadosendereco">
                <ControlLabel>
                    Complemento
                </ControlLabel>
                <FormControl name="complementoEnder" type="text" placeholder="Complemento" 
                    value={this.state.complementoEnder} onChange={e => this.changeHandler(e) }/>
            </FormGroup>
        </div>
        <div className="campos_dir">
            <FormGroup controlId="bairro" className="bairro fg_dadosendereco">
                <ControlLabel>                        
                    Bairro
                </ControlLabel>
                <FormControl name="bairroEnder" type="text" placeholder="Bairro" 
                    value={this.state.bairroEnder} onChange={e => this.changeHandler(e) }/>
            </FormGroup>
            <FormGroup controlId="cidade" className="cidade fg_dadosendereco">
                <ControlLabel>                        
                    Cidade
                </ControlLabel>
                <FormControl name="cidadeEnder" type="text" placeholder="Cidade" 
                    value={this.state.cidadeEnder} onChange={e => this.changeHandler(e) }/>
            </FormGroup>
            <FormGroup controlId="estado" className="estado fg_dadosendereco">
                <ControlLabel>                        
                    Estado
                </ControlLabel>
                <FormControl name="estadoEnder" componentClass="select" 
                    value={this.state.estadoEnder} onChange={e => this.changeHandler(e) }>
                    {renderOpitions(Estados)}
                </FormControl>
            </FormGroup>
        </div>
    </Form>
</div> 
*/}

// constructor(props) {
//     super(props);
//     this.changeHandler = this.changeHandler.bind(this);
//     this.state = {
//         telContCli: '',
//         ramalContCli: '',
//         emailContCli: '',
//         contatoContCli: '',
//         inscEstContCli: '',
//         inscMunContCli: '',
//         grupoContCli: '',
//     }
// }

// changeHandler = (e) => {
//     this.setState({
//         [e.target.name]: e.target.value
//     })
// }

// render() {
//     return (
//         <div id="dados-cont-cli" className="dados_cont_cli">
//             <Form horizontal>
//                 <FormGroup controlId="tel-cliente-alt" className="fg_dadoscont_cli">
//                     <ControlLabel>
//                         Telefone
//                     </ControlLabel>
//                     <FormControl name="telContCli" type="tel" placeholder="Telefone"
//                         value={this.state.telContCli} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//                 <FormGroup controlId="ramal-cliente-alt" className="ramal_cliente_alt fg_dadoscont_cli">
//                     <ControlLabel>
//                         Ramal
//                     </ControlLabel>
//                     <FormControl name="ramalContCli" type="text" placeholder="Ramal"
//                         value={this.state.ramalContCli} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//                 <FormGroup controlId="email-cliente-alt" className="fg_dadoscont_cli">
//                     <ControlLabel>
//                         Email
//                     </ControlLabel>
//                     <FormControl name="emailContCli" type="email" placeholder="Email"
//                         value={this.state.emailContCli} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//                 <FormGroup controlId="contato-cliente-alt" className="contato_cliente_alt fg_dadoscont_cli">
//                     <ControlLabel>
//                         Contato
//                     </ControlLabel>
//                     <FormControl name="contatoContCli" type="text" placeholder="Contato"
//                         value={this.state.contatoContCli} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//                 <FormGroup controlId="inscest-cliente-alt" className="fg_dadoscont_cli">
//                     <ControlLabel>
//                         Insc. Est.
//                     </ControlLabel>
//                     <FormControl name="inscEstContCli" type="text" placeholder="Inscrição Estadual"
//                         value={this.state.inscEstContCli} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//                 <FormGroup controlId="inscmun-cliente-alt" className="inscmun_cliente_alt fg_dadoscont_cli">
//                     <ControlLabel>
//                         Insc. Mun.
//                     </ControlLabel>
//                     <FormControl name="inscMunContCli" type="text" placeholder="Inscrição Municipal"
//                         value={this.state.inscMunContCli} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//                 <FormGroup controlId="grupo-cliente-alt" className="fg_dadoscont_cli">
//                     <ControlLabel>
//                         Grupo
//                     </ControlLabel>
//                     <FormControl name="grupoContCli" type="text" placeholder="Grupo"
//                         value={this.state.grupoContCli} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//             </Form>
//         </div>
//     );
// }

// constructor(props) {
//     super(props);
//     this.changeHandler = this.changeHandler.bind(this);
//     this.state = {
//         telContTrab: '',
//         nextelContTrab: '',
//         facebookContTrab: '',
//         emailContTrab: '',
//         codCentroCustoContTrab: '',
//         cargoContTrab: '',
//         deptoContTrab: '',
//     }
// }

// changeHandler = (e) => {
//     this.setState({
//         [e.target.name]: e.target.value
//     })
// }

// render() {
//     $(document).ready(function($){
//         $('#tel').mask('+55 99 9999-9999')
//     });
//     return (
//         <div id="dados-cont-trab" className="dados_cont_trab">
//             <Form horizontal>
//                 <FormGroup controlId="tel" className="tel fg_dadoscont_trab">
//                     <ControlLabel>
//                         Telefone
//                     </ControlLabel>
//                     <FormControl name="telContTrab" type="tel" placeholder="Telefone"
//                         value={this.state.telContTrab} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//                 <FormGroup controlId="nextel" className="nextel fg_dadoscont_trab">
//                     <ControlLabel>
//                         Nextel
//                     </ControlLabel>
//                     <FormControl name="nextelContTrab" type="tel" placeholder="Nextel"
//                         value={this.state.nextelContTrab} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//                 <FormGroup controlId="fb" className="fb_ fg_dadoscont_trab">
//                     <ControlLabel>
//                         Facebook.com/
//                     </ControlLabel>
//                     <FormControl name="facebookContTrab" type="text" placeholder="Facebook"
//                         value={this.state.facebookContTrab} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//                 <FormGroup controlId="email" className="email_ fg_dadoscont_trab">
//                     <ControlLabel>
//                         Email
//                     </ControlLabel>
//                     <FormControl name="emailContTrab" type="email" placeholder="Email"
//                         value={this.state.emailContTrab} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//                 <FormGroup controlId="codcentro" className="codcentro fg_dadoscont_trab">
//                     <ControlLabel>
//                         Cód. Centro Custo
//                     </ControlLabel>
//                     <FormControl name="codCentroCustoContTrab" type="text" placeholder="Código Centro de Custo"
//                         value={this.state.codCentroCustoContTrab} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//                 <FormGroup controlId="cargo" className="cargo fg_dadoscont_trab">
//                     <ControlLabel>
//                         Cargo
//                     </ControlLabel>
//                     <FormControl name="cargoContTrab" type="text" placeholder="Cargo"
//                     value={this.state.cargoContTrab} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//                 <FormGroup controlId="depto" className="depto fg_dadoscont_trab">
//                     <ControlLabel>
//                         Depto.
//                     </ControlLabel>
//                     {/* VALOR VIRIA CARREGADO */}
//                     <FormControl name="deptoContTrab" type="text" placeholder="Departamento"
//                     value={this.state.deptoContTrab} onChange={e => this.changeHandler(e)} />
//                 </FormGroup>
//             </Form>
//         </div>
//     )
// }