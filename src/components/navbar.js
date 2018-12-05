import React from 'react'
import { Button } from 'reactstrap'
import LoginModal from './loginModal'

class NavBar extends React.Component {

    constructor() {
        super();
        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        console.log('Set state: ' + this.state.modal)
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return(
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                <img src="logo.png" width="52" height="37" className="d-inline-block align-top" alt=""/>
                Essensplaner
                </a>
                <Button onClick={this.toggle}>Login</Button>
                <LoginModal modal={this.state.modal} toggle={this.toggle}></LoginModal>
            </nav>
        )
    }
    
}

export default NavBar;