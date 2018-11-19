import React from 'react';
import EmailInfoBtn from '../components/EmailInfoBtn';

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }

    return arr;
}

const emailEnviadoData = () => {
    return {
        btn: <EmailInfoBtn />,
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