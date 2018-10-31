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
                <Table hover condensed striped >
                    <thead>
                        <tr>
                            <th>X</th>
                            <th>{this.props.t1}</th>
                            <th>{this.props.t2}</th>
                            <th>{this.props.t3}</th>
                            <th>{this.props.t4}</th>
                            <th>{this.props.t5}</th>
                            <th>{this.props.t6}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>x</td>
                            <td>{this.props.v1}</td>
                            <td>{this.props.v2}</td>
                            <td>{this.props.v3}</td>
                            <td>{this.props.v4}</td>
                            <td>{this.props.v5}</td>
                            <td>{this.props.v6}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}