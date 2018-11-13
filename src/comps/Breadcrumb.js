import React from 'react';
import { Breadcrumb } from 'react-bootstrap';


const BreadcrumbTeste = (props) => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href={props.linkItem}>
                {props.item1}
            </Breadcrumb.Item>
        </Breadcrumb>  
    );
} 

export default BreadcrumbTeste;