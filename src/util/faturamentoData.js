import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faBars, faFileAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faFileAlt, faEnvelope, faBars)

const style = {
    marginLeft  : '5px',
    width: '55px'
}

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }

    return arr;
}

const faturamentoData = () => {
    return {
        cliente: 'Teste',
        codigo: 'Teste',
        competencia: 3,
        prevPag: 44,
        tipoContrato: 'sdas',
        total: 23131,
        btn: <div>
                <Button style={style} title="Gerar nota fiscal do faturamento"><FontAwesomeIcon icon="file-alt"/></Button>
                <Button style={style} title="Envio de demonstrativo para o cliente"><FontAwesomeIcon icon="envelope"/></Button>
                <Button style={style} title="Lista de notas fiscais geradas"><FontAwesomeIcon icon="bars"/></Button>
            </div>
    };
};

export function makeData(len = 100) {
    return range(len).map(d => {
        return {
            ...faturamentoData(),
            children: range(10).map(faturamentoData)
        }
    });
}