import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { } from '@fortawesome/free-solid-svg-icons';

library.add();

export default class Lista extends React.Component {
    render() {
        return (
            <div className="lista_cad">
                <Table hover condensed striped bordered>
                    <thead>
                        <th></th>
                        <th>{this.props.t1}</th>
                        <th>{this.props.t2}</th>
                        <th>{this.props.t3}</th>
                        <th>{this.props.t4}</th>
                        <th>{this.props.t5}</th>
                        <th>{this.props.t6}</th>
                    </thead>
                </Table>
            </div>
        );
    }
}