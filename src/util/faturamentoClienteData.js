import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

library.add(faDollarSign);

const style = {
    float: 'right'
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
        btn: <div>
                <Button style={style}><FontAwesomeIcon icon="dollar-sign"/> Faturamentos</Button>
            </div>
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