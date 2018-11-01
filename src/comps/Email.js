// COMPONENTE ENVIAR E-MAIL

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Email, Item, Span, A, renderEmail } from 'react-html-email';

library.add();
// TESTE COM REACT-HTML-EMAIL  -> https://github.com/chromakode/react-html-email

export default class EmailTeste extends React.Component {
    render() {
        return (
            <div>
                <Email title="Hello World!">
                    <Item align="center">
                    <Span fontSize={20}>
                        This is an example email made with:
                        <A href="https://github.com/chromakode/react-html-email">react-html-email</A>.
                    </Span>
                    </Item>
                </Email>
            </div>
        )
    }
}