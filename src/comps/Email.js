// COMPONENTE ENVIAR E-MAIL

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import '../comps_css/Email.css';

library.add(faPaperPlane);

export default class EmailTeste extends React.Component {
    render() {
        return (
            <div className="email">
                <Form>
                    <FormGroup controlId="titulo-email">
                        <ControlLabel>Título</ControlLabel>
                        <FormControl type="text" value={this.props.titulo}/> 
                    </FormGroup>
                    <FormGroup controlId="cliente-email" className="display_ib_clidest">
                        <ControlLabel>Cliente</ControlLabel>
                        <FormControl type="text" value={this.props.cliente} />
                    </FormGroup>
                    <FormGroup controlId="destinatario-email" className="display_ib_clidest">
                        <ControlLabel>Destinatário</ControlLabel>
                        <FormControl type="text" value={this.props.destinatario} />
                    </FormGroup>
                    <FormGroup controlId="conteudo-email">
                        <FormControl type="text" componentClass="textarea" value={this.props.conteudo} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Arquivo anexado</ControlLabel>{' '}
                        {this.props.arquivo}
                    </FormGroup>
                    <FormGroup controlId="enviar-email">
                        <Button>Enviar<FontAwesomeIcon icon="paper-plane"/></Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}  

/**
title: demonstrativo ou nota fiscal
cliente: cliente a ser enviado.
destinatario: e-mail destino.
conteudo: pré definido para demonstrativo ou nota fiscal.
 */

//  SUBTELA/COMP -> ACESSÍVEL APÓS GERAR UMA NF OU PARA DEMONSTRATIVO NO /FATURAMENTO.