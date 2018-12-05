import React from 'react';
import { Input, InputGroup, InputGroupAddon, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class LoginModal extends React.Component {

    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
            <ModalHeader toggle={this.props.toggle}>Login</ModalHeader>
            <ModalBody>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input placeholder="username" />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                    <Input placeholder="password" />
                </InputGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.props.toggle}>Login</Button>{' '}
              <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        );
    }
}

export default LoginModal;