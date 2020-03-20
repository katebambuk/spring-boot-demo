import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SignUp.css';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeatedPassword: '',
        }
    }

    handleSubmitClick() {
        console.log("submit clicked");
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign up form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please enter your login and password</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onClose}>
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmitClick}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default SignUp;