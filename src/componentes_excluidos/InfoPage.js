// NÃO UTILIZADO - EXCLUIR
/* COMPONENTE INFOPAGE:
QTDE DE PAGS, REGRISTROS/PAG E PAGINAÇÃO (BOTÕES AVANÇAR/VOLTAR) */

import React from 'react';
import { Pagination, FormControl } from 'react-bootstrap';
import '../css-geral-comps/InfoPage.css';

const borderStyle = {
    borderBottom: '2px solid #e7e7e7',
    paddingBottom: '80px'
}

export default class InfoPage extends React.Component {
    render() {
        return (
            <div name="border" style={borderStyle}>
                <div className="left">
                    <p>Pág. 01/04 » Reg. 1 ao 10</p>
                </div>
                <div className="right">
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>
                            <FormControl name="pg-num" type="text" maxLength="3"
                            placeholder="" className="input_page_num"/>
                        </Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                    <FormControl name="reg-per-page" componentClass="select" className="reg_per_page">
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                    </FormControl>
                </div>
            </div>
        );
    }
}
