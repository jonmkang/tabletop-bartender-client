import React, { Component } from 'react';
import './RegisterForm.css'
import AuthApiService from '../../services/auth-api-service'


export default class RegisterForm extends Component{
    constructor(props){
        super(props)
        this.state={
            error: ""
        }
    }

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    validatePassword(password) {
        const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]/;
        
        if (password.length < 8) {
            this.setState({ error: 'Password must be longer than 8 characters'})
            return false
        }
        if (password.length > 72) {
            this.setState({ error: 'Password must be less than 72 characters'})
            return false
        }
        if (password.startsWith(' ') || password.endsWith(' ')) {
            this.setState({ error: 'Password must not start or end with empty spaces'})
            return false
        }
        if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
            this.setState({ error: 'Password must contain 1 upper case, lower case, number and special character'})
            return false
        }
        return true
    }

    handleSubmit = e => {
        e.preventDefault();
        const {first_name, user_email, password } = e.target;        

        if(!this.validateEmail(user_email.value)){
            this.setState({ error: "You must enter a valid email to register"})
            return 
        }

        if(!this.validatePassword(password.value)){
            return 
        }

        const new_user = { 
                            first_name: first_name.value,
                            password: password.value,
                            user_email: user_email.value
                        }

        AuthApiService.postUser(new_user)
            .then(user => {
                first_name.value = ''
                user_email.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
                })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state
        return (
            <div>
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <div className='first_name'>
                        <label htmlFor='register_first_name'>
                            First name
                        </label>
                        <input
                            required
                            name='first_name'
                            id='register_first_name'/>
                    </div>
                    <div className='user_email'>
                        <label htmlFor='user_email'>
                            Email
                        </label>
                        <input
                            required
                            name='user_email'
                            id='user_email'/>
                    </div>
                    <div className='register_password'>
                        <label htmlFor='register__password'>
                            Password
                        </label>
                        <input
                            required
                            name='password'
                            type='password'
                            id='register__password'/>
                    </div>
                    <p className='error'>{error}</p>
                    <button type='submit' className='submit-registration-form'>
                    Login
                    </button>
                </form>
                
            </div>
        )
    }
}
