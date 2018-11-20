import React from 'react';
import { BtnLista } from '../components/BotoesLista';

const style = {
    float: 'right',
    width: '120px'
}

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }

    return arr;
}

const cliGestaoData = () => {
    return {
        cliente: 'Teste',
        qtdeFat: '23',
        btn: <BtnLista style={style} nameBtn="Incluir" iconBtn="plus-circle" /> 
    };
};

export function makeData(len = 30) {
    return range(len).map(d => {
        return {
            ...cliGestaoData(),
            children: range(10).map(cliGestaoData)
        }
    });
}