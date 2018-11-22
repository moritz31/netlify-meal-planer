import React from 'react'
import dateFns from 'date-fns'

class MonthOverview extends React.Component {

    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    renderDays() {
        const { currentMonth, selectedDate } = this.state;

        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);

        const dateFormat = "ddd D";
        const rows = [];

        let day = monthStart;
        let formattedDate = "";
        let dayOfWeek = "";

        while (day <= monthEnd) {
            formattedDate = dateFns.format(day, dateFormat);
            dayOfWeek = dateFns.getDay(day);
            rows.push(
                <div className="row" key={day}>
                {formattedDate}
                </div>
            );
            day = dateFns.addDays(day, 1);
        }
        return <div className="body">{rows}</div>;    
    }

    render() {
        return(
            <div className="calendar">
            {this.renderDays()}
            </div>
        );
    }    
}

export default MonthOverview;