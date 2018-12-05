import React from 'react'
import dateFns from 'date-fns'
import { Table } from 'reactstrap';

class Overview extends React.Component {

    renderDays() {

        const monthStart = dateFns.startOfMonth(this.props.month);
        const monthEnd = dateFns.endOfMonth(monthStart);

        const dateFormat = "ddd D";

        const head = [];
        const rows = [];

        let day = monthStart;
        let formattedDate = "";
        let dayOfWeek = "";

        head.push(
            <thead>
                <tr>
                    <th>Datum</th>
                    <th>Essen</th>
                    <th>Preis</th>
                </tr>
            </thead>
        );

        while (day <= monthEnd) {
            formattedDate = dateFns.format(day, dateFormat);
            dayOfWeek = dateFns.getDay(day);
            rows.push(
                <tr key={day}>
                    <td>{formattedDate}</td>
                    <td></td>
                    <td></td>
                </tr>
            );
            day = dateFns.addDays(day, 1);
        }

        return (
            <Table>
                {head}
                <tbody>
                    {rows}
                </tbody>
            </Table>
        );    
    }

    createRow() {

    }

    render() {
        return(
            this.renderDays()
        );
    } 
}

export default Overview;