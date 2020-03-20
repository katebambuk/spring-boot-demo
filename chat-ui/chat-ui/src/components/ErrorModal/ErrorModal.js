import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import './ErrorModal.css';

class ErrorModal extends Component {

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.onClose} >
                    <Modal.Header style={{backgroundColor: "red"}} closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>
                            Wrong username or password.
                            <br/>
                            Please check input data.
                        </h5>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default ErrorModal;