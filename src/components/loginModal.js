import React from 'react';
import { Input, InputGroup, InputGroupAddon, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Auth } from 'aws-amplify'

class LoginModal extends React.Component {

    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        };

        this.handleInput = this.handleInput.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    handleInput(event) {
        const target = event.target;

        this.setState({
            [target.name]: target.value
        });
    }

    signIn() {
        Auth.signIn(this.state.username, this.state.password)
            .then(user => {
                console.log('Login sucessful!');
                console.log(user);
                this.props.toggle();
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
            <ModalHeader toggle={this.props.toggle}>Login</ModalHeader>
            <ModalBody>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input name='username' placeholder="username" onChange={this.handleInput} />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input type='password' name='password' placeholder="password" onChange={this.handleInput} />
                </InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.signIn}>Login</Button>{' '}
              <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        );
    }
}

export default LoginModal;