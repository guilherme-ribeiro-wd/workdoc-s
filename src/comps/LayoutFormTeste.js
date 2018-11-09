import React from 'react';
import { Form } from 'react-bootstrap';
import '../comps_css/LayoutFormTeste.css';


const LayoutFormTeste = (props) => {
    return (
        <div className="border_forms_cadastro">
            <Form horizontal className="forms_cadastro">
                {props.children}
            </Form>
        </div>
    );
};

export default LayoutFormTeste;