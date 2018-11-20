import React from 'react';
import { BtnExcluirMov, BtnLista } from '../components/BotoesLista';

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }

    return arr;
}

const movimentoCliData = () => {
    return {
        btnExcluir: <BtnExcluirMov />,
        cod: '13635',
        datas: '23/02/2018 00:00 -> 26/02/2018 23:55',
        tipoContrato: 'Teste',
        competencia: '1/2025',
        prevPgto: '20/02/2200',
        valorComImpostos: 'R$ 3001,01',
        status: 'Fechado',
        editar: [<BtnLista nameBtn="Dados" iconBtn="file-alt"/>,
                    <BtnLista nameBtn="Planilha" iconBtn="file-excel"/>]
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