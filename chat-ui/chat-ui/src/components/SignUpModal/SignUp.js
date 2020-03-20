import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SignUp.css';
import {Col, Form, Row} from "react-bootstrap";
import {apiUrl} from "../../utils/apiUtils";
import ErrorModal from "../ErrorModal/ErrorModal";

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeatedPassword: '',
        };

        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeRepeatedPassword = this.handleChangeRepeatedPassword.bind(this);
    }

    handleSubmitClick() {
        const user = {
            login: this.state.username,
            password: this.state.password,
            repeatedPassword: this.state.repeatedPassword,
            signUpResult: false,
            showErrorModal: false,
        };

        fetch(`${apiUrl}/sign-up`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    signUpResult: data,
                    showErrorModal: !data,
                });

                if (this.state.signUpResult) {
                    console.log("Registered successfully")
                }
            });
    }

    handleChangeUsername(e) {
        this.setState({username: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }

    handleChangeRepeatedPassword(e) {
        this.setState({repeatedPassword: e.target.value});
    }

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign up form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please enter your login and password</Modal.Body>
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

                        <Form.Group as={Row}>
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

                        <Form.Group as={Row}>
                            <Form.Label column={1} sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="password"
                                    placeholder="Repeat password"
                                    onChange={this.handleChangeRepeatedPassword}
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                    <Modal.Footer>
                        <Button onClick={this.handleSubmitClick}>
                            Submit
                        </Button>
                    </Modal.Footer>
                    // todo add text
                    <ErrorModal show={this.state.showErrorModal} onClose={() => this.setState({ showErrorModal: false })}/>
                </Modal>
            </div>
        );
    }
}

export default SignUp;