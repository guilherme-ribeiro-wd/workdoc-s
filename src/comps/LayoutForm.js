import React from 'react';
import { Form } from 'react-bootstrap';
import '../comps_css/LayoutForm.css';

const LayoutForm = (props) => {
    return (
        <div className="border_forms_cadastro">
            <Form horizontal className="forms_cadastro">
                {props.children}
            </Form>
        </div>
    );
};

export default LayoutForm;