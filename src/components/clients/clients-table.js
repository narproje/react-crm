import React, { Component } from 'react';
import TableHeader from './table-header';
import TableRow from './table-row';
class ClientsTable extends Component {
    render() {
        const dataToDisplay = this.props.data.map(c => <TableRow key={c.id} update={this.props.update} data={c} />)
        return (
            <div>
                <TableHeader />
                {dataToDisplay}
            </div>
        )
    }
}


export default ClientsTable