import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
// eslint-disable-next-line no-unused-vars
import { FormattedMessage } from 'react-intl';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        console.log(event.target.value)
    }

    handleLogin = () => {
        console.log('username: ', this.state.username, ' password: ', this.state.password)
        console.log('all state ', this.state)
    }

    handleShowHidePassword = (event) => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        //JSX
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 login-text'>
                            Login
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>UserName:</label>
                            <input
                                className='form-control'
                                type='text'
                                placeholder='Enter your username ...'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}>
                            </input>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input
                                    className='form-control'
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    placeholder='Enter your password ...'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)}>
                                </input>
                                <span onClick={(event) => this.handleShowHidePassword(event)}>
                                    <i class={this.state.isShowPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={(event) => this.handleLogin(event)}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-4'>
                            <span className='text-other-login'>Or Login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className='fab fa-facebook-f facebook'></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
