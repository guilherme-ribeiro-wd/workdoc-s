import React from 'react';
import { Button } from 'react-bootstrap';
import img from '../img/none.gif'; 
// img que é renderizada no lugar do botão caso o faturamento ja esteja fechado
import '../style/components_css/BotoesLista.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import 
    { faFileAlt, faFileExcel, faTimes, faPlusCircle, faDollarSign, faEnvelope, faBars } 
        from '@fortawesome/free-solid-svg-icons';
library.add(faFileAlt, faFileExcel, faTimes, faPlusCircle, faDollarSign, faEnvelope, faBars);

export const BtnExcluirMov = () => {
    return (
        <span className="span_btn" title={`excluir faturamento 13635?`}>
            <FontAwesomeIcon icon="times" color="red" />
        </span>
    );
}

export const BtnLista = (props) => {
    return (
        <Button className="mov_btn" style={props.style} title={props.titleBtn}>
            <FontAwesomeIcon icon={props.iconBtn} />
            {props.nameBtn}
        </Button>
    );
}