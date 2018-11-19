import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileAlt, faFileExcel, faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faFileAlt, faFileExcel, faTimes);

const times = {
    width: '40px'
}

const style = {
    marginLeft: '5px'
}

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }

    return arr;
}

const movimentoCliData = () => {
    return {
        btnExcluir: <div>
                        <Button style={times} title={`excluir faturamento 13635?`}><FontAwesomeIcon icon="times" color="red" /></Button>
                    </div>,
        cod: '13635',
        datas: '23/02/2018 00:00 -> 26/02/2018 23:55',
        tipoContrato: 'Teste',
        competencia: '1/2025',
        prevPgto: '20/02/2200',
        valorComImpostos: 'R$ 3001,01',
        status: 'Fechado',
        editar: <div>
                    <Button><FontAwesomeIcon icon="file-alt" /> Dados</Button>
                    <Button style={style}><FontAwesomeIcon icon="file-excel" /> Planilha</Button>
                </div>
    };
};

export function makeData(len = 30) {
    return range(len).map(d => {
        return {
            ...movimentoCliData(),
            children: range(10).map(movimentoCliData)
        }
    });
}