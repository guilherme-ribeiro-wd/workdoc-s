/**
TESTE DE OTIMIZAÇÃO; OBJETIVO EXCLUIR OS 4 COMPONENTES DE PESQUISAS:
FormPesquisaUsuario, FaturamentoClienteLista, FormPequisaCliente, FormPesquisaFaturamento;
*/
import React from 'react';
import { Form } from 'react-bootstrap';
import '../css-geral-comps/FormPesquisa_v2.css';

const FormPesquisa_v2 = (props) => {
    return (
        <div className="border_forms_pesq">
            <Form inline action method="get" className="forms_pesq">
                {props.children}
            </Form>
        </div>
    );
}

export default FormPesquisa_v2;