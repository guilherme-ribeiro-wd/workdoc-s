import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {  } from '@fortawesome/free-solid-svg-icons';

library.add();
const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }

    return arr;
}

const emailEnviadoData = () => {
    return {
        btn: <div></div>,
        cliente: 'Teste',
        competencia: '2/2056',
        produto: 'Teste teste',
        assunto: 'Teste',
        envio: 'Teste'
    };
};

export function makeData(len = 30) {
    return range(len).map(d => {
        return {
            ...emailEnviadoData(),
            children: range(10).map(emailEnviadoData)
        }
    });
}