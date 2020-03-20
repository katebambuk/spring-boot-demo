import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import React, {Component} from 'react';
import './WelcomePage.css';
import LogIn from "../LogInModal/LogIn";
import SignUp from "../SignUpModal/SignUp";

class WelcomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showLogIn: false,
            showSignUp: false,
        };

        this.handleLogInClick = this.handleLogInClick.bind(this);
        this.handleSignUpClick = this.handleSignUpClick.bind(this);
        this.handleCloseLogInModal = this.handleCloseLogInModal.bind(this);
        this.handleCloseSignUpModal = this.handleCloseSignUpModal.bind(this);
    }

    handleLogInClick() {
        this.setState({ showLogIn: true });
    }

    handleSignUpClick() {
        this.setState({ showSignUp: true });
    }

    handleCloseLogInModal() {
        this.setState({ showLogIn: false });
    }

    handleCloseSignUpModal() {
        this.setState({ showSignUp: false });
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Welcome to chat!"
                        />
                        <div className="welcome-form-text">
                            Please log in or sign up in chat
                            <div>
                                <RaisedButton label="LOG IN" primary={true} className="welcome-button"
                                              onClick={() => this.handleLogInClick()}/>
                                <RaisedButton label="SIGN UP" primary={true} className="welcome-button"
                                              onClick={() => this.handleSignUpClick()}/>
                            </div>
                        </div>
                    </div>
                </MuiThemeProvider>
                <LogIn show={this.state.showLogIn} onClose={this.handleCloseLogInModal}/>
                <SignUp show={this.state.showSignUp} onClose={this.handleCloseSignUpModal}/>
            </div>
        );
    }
}

export default WelcomePage;