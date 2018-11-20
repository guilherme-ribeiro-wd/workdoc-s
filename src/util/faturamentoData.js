import React from 'react';
import { BtnLista } from '../components/BotoesLista';

const style = {
    marginLeft  : '5px',
    width: '48px'
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
        btn: [<BtnLista titleBtn="Gerar nota fiscal do faturamento" iconBtn="file-alt" style={style}/>,
            <BtnLista titleBtn="Envio de demonstrativo para o cliente" iconBtn="envelope" style={style}/>,
            <BtnLista titleBtn="Lista de notas fiscais geradas" iconBtn="bars" style={style}/>,]
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