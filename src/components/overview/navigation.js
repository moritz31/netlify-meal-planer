import React from 'react'
import { Button } from 'reactstrap'
import dateFns from 'date-fns'
import { Row, Col } from 'reactstrap';

class Navigation extends React.Component {

    render() {
        let monthName = dateFns.format(this.props.month, "MMMM YYYY")
        return( 
            <Row>
                <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
                    <Button color="outline-dark" onClick={this.props.leftClick}>{'<'}</Button>
                    <Button color="outline-dark" disabled>{monthName}</Button>
                    <Button color="outline-dark" onClick={this.props.rightClick}>{'>'}</Button>
                </Col>
            </Row> 
        );
    }
}

export default Navigation;