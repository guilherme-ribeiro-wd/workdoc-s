// IMPORTS PADRÕES/COMPONENTES
import React from 'react';
// IMPORTS PARA ICONES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
library.add(faEye, faEyeSlash);

const style = {
    display: 'inline-block',
    marginRight: '16px',
}

const EmailInfo = (props) => {
    const visualizado = props.visualizado;
    let result;
    if(visualizado) {
        result = <p style={style}>Visualizado: Sim <FontAwesomeIcon icon="eye"/></p>
    } else {
        result = <p style={style}>Visualizado: Não <FontAwesomeIcon icon="eye-slash"/></p>
    }

    return (
        <div className="email_info">
            {/* add cliente e assunto */}
            <p style={style}>Para: {props.nomeDstn}</p>
            <p style={style}>{props.emailDstn}</p>
            {result}
        </div>
    );
}

export default EmailInfo;