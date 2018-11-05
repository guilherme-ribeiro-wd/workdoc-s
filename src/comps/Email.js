// COMPONENTE ENVIAR E-MAIL

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { Email, Item, Span, A, renderEmail, Box, Image } from 'react-html-email';

import '../css-geral-comps/Email.css';

library.add(faPaperPlane);
// TESTE COM REACT-HTML-EMAIL  -> https://github.com/chromakode/react-html-email

const css = `
@media only screen and (max-device-width: 480px) {
  font-size: 60px !important;
}`.trim();

export default class EmailTeste extends React.Component {
    render() {
        return (
                <Email title={this.props.title} headCSS={css} className="div_email">
                    <Item>
                    <Span fontSize={15}>{this.props.title} {this.props.cliente}</Span>
                    </Item>
                    <Item>
                    <Box cellSpacing={20} width="100%" style={{ borderTop: '3px solid black' }}>
                        <Item>
                        <Span color="gray" lineHeight={20}>{this.props.destinatario}</Span>
                        </Item>
                    </Box>
                    </Item>
                    <Item>
                        {this.props.conteudo}
                    </Item>
                    <Item>
                        {/*  arquivo.xlsx // arquivo.pdf*/}
                    </Item>
                    <Item>
                        <Button type="submit" className="email_btn">Enviar<FontAwesomeIcon icon="paper-plane"/></Button>
                    </Item>
                </Email>
        )
    }
}

{/* WARINING EMAIL -> HTML CANNOT APPEAR AS CHILD OF DIV */}
  

/**
title: demonstrativo ou nota fiscal
cliente: cliente a ser enviado.
destinatario: e-mail destino.
conteudo: pré definido para demonstrativo ou nota fiscal.
 */

//  SUBTELA/COMP -> ACESSÍVEL APÓS O ENVIO DE UMA NF OU PARA DEMONSTRATIVO NO /FATURAMENTO. 