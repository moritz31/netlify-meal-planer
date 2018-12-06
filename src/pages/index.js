import React from 'react';
import PropTypes from 'prop-types';
import withRoot from '../withRoot';
import { Container } from 'reactstrap'
import NavBar from '../components/navbar'
import MonthOverview from '../components/monthOverview'

class Index extends React.Component {
  state = {
    open: false,
    isAuthenticated: false,
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

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
    console.log('Login state: ' + this.state.authenticated)
  }

  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
        <Container>
          <NavBar childProps={childProps} />
          <MonthOverview childProps={childProps} />
        </Container>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot((Index));
