import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './LogIn.css';
import {Col, Form, Row} from "react-bootstrap";
import {apiUrl} from "../../utils/apiUtils";
import ErrorModal from "../ErrorModal/ErrorModal";

class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            authResult: false,
            showErrorModal: false,
        };

        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleSubmitClick() {
        const user = {
            login: this.state.username,
            password: this.state.password,
        };

        fetch(`${apiUrl}/login`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    authResult: data,
                    showErrorModal: !data,
                });

                if (this.state.authResult) {
                    window.open(`${window.location.origin}/main`,"_self")
                }
            });
    }


    handleChangeUsername(e) {
        this.setState({username: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log in form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>
                            Please enter your login and password
                        </h5>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column={1} sm="2">
                                    Username
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        onChange={this.handleChangeUsername}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column={1} sm="2">
                                    Password
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        onChange={this.handleChangePassword}
                                    />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer className="modal-button-bar">
                        <Button onClick={this.handleSubmitClick}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
                <ErrorModal show={this.state.showErrorModal} onClose={() => this.setState({ showErrorModal: false })}/>
            </div>
        );
    }
}

export default LogIn;