// THIS TEST HAS FAILED
import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";


export default class ReactTableAux extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            next: 'Próximo',
            previous: 'Anterior',
            page: 'Página',
            of: 'de',
            row: 'registros'
        };
    }

    render() {
        return (
            <div>
            <ReactTable data={this.props.a} column={this.props.b} 
            className="-striped -highlight" previousText={this.state.previous} nextText={this.state.next} 
            pageText={this.state.page} ofText={this.state.of} rowsText={this.state.row}
            showPaginationTop="true" showPaginationBottom="false" resizable="false"/>
            </div>
        );
    }
}