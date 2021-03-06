import React from 'react'
import Navigation from './overview/navigation.js'
import Overview from './overview/overview.js'
import AdminPanel from './overview/adminPanel.js'
import dateFns from 'date-fns'
import { Button } from 'reactstrap'


class MonthOverview extends React.Component {

    constructor() {
        super();

        this.state = { 
            currentMonth: new Date(),
            selectedDate: new Date()
        };

        this.nextMonth = this.nextMonth.bind(this);
        this.previousMonth = this.previousMonth.bind(this);
    }

    nextMonth() {
        this.setState({selectedDate: dateFns.addMonths(this.state.selectedDate,1)})
    }

    previousMonth() {
        this.setState({selectedDate: dateFns.subMonths(this.state.selectedDate,1)})
    }

    render() {
        return(
            <div className="calendar">
                <Navigation month={this.state.selectedDate} leftClick={this.previousMonth} rightClick={this.nextMonth}></Navigation>
                {this.props.childProps.isAuthenticated
                    ? <AdminPanel></AdminPanel>
                    : <div></div>
                }
                <Overview month={this.state.selectedDate}></Overview>
            </div>
        )
    }
}

export default MonthOverview;