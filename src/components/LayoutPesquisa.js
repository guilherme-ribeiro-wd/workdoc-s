// LAYOUT UTILIZADO PARA RENDERIZAR O PARTE DE PESQUISA DAS PAGINAS: 
// LISTA CLIENTE, LISTA USUARIO, LISTA CLIENTE FATURAMENTO, LISTA FATURAMENTO
import React from 'react';
import { Form } from 'react-bootstrap';
import '../style/components_css/LayoutPesquisa.css';

const LayoutPesquisa = (props) => {
    return (
        <div className="border_forms_pesq">
            <Form inline action method="get" className="forms_pesq">
                {props.children}
            </Form>
        </div>
    );
}

export default LayoutPesquisa;