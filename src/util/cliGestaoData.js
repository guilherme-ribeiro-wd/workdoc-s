import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusCircle);

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
        btn: <div>
                <Button style={style}><FontAwesomeIcon icon="plus-circle"/> Incluir</Button>
            </div>
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