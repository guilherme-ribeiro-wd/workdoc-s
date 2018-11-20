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

const faturamentoClienteData = () => {
    return {
        cliente: 'Teste',
        obs: 'Teste',
        pedido: 'Teste',
        btn: <BtnLista nameBtn="Faturamentos" iconBtn="dollar-sign" style={style} /> 
    };
};

export function makeData(len = 30) {
    return range(len).map(d => {
        return {
            ...faturamentoClienteData(),
            children: range(10).map(faturamentoClienteData)
        }
    });
}