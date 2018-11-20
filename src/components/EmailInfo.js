// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
// IMPORTS CSS
import '../style/components_css/Email.css';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
library.add(faEye, faEyeSlash);

const EmailInfo = (props) => {
    const visualizado = props.visualizado;
    let result;
    if(visualizado) {
        result = <p>Visualizado: Sim <FontAwesomeIcon icon="eye"/></p>
    } else {
        result = <p>Visualizado: Não <FontAwesomeIcon icon="eye-slash"/></p>
    }

    return (
        <div className="email_info">
            <div className="email_info_header">
            <p>Cliente: {props.cliente}</p>
            <p>Assunto: {props.assunto}</p>
            </div>
            <div className="email_info_content">
                <p>Para: {props.nomeDstn}</p>
                <p>{props.emailDstn}</p>
                {result}
            </div>
        </div>
    );
}

export default EmailInfo;