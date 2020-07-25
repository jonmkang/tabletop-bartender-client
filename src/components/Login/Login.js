import React, { Component } from 'react'
import './Login.css'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export default class Login extends Component{
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }

    handleLogin = e => {
        e.preventDefault();

        this.setState({ error: null })
        const { user_email, password } = e.target

        AuthApiService.postLogin({
            user_email: user_email.value,
            password: password.value,
            })
        .then(res => {
            user_email.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)

            this.props.onLoginSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render(){
        const { error } = this.state
        return (
            <div className='login'>
                <form className="login-form" onSubmit={this.handleLogin}>
                    <div className='user_email'>
                        <label htmlFor='LoginForm__user_email'>
                            Email
                        </label>
                        <input
                            required
                            name='user_email'
                            id='LoginForm__user_email'/>
                    </div>
                    <div className='password'>
                        <label htmlFor='LoginForm__password'>
                            Password
                        </label>
                        <input
                            required
                            name='password'
                            type='password'
                            id='LoginForm__password'/>
                    </div>
                    <p className='error'>{error}</p>
                    <button type='submit' className='submit-login'>
                    Login
                    </button>
                </form>
            </div>
        )
    }
}