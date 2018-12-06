import React from 'react';
import PropTypes from 'prop-types';
import withRoot from '../withRoot';
import { Container } from 'reactstrap'
import NavBar from '../components/navbar'
import MonthOverview from '../components/monthOverview'

class Index extends React.Component {
  state = {
    open: false,
    authenticated: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
        <Container>
          <NavBar />
          <MonthOverview />
        </Container>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot((Index));
