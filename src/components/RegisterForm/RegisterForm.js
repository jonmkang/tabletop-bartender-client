import React, { Component } from 'react';
import './RegisterForm.css'


export default class RegisterForm extends Component{

    render() {
        return (
            <div>
                <form className="register-form">
                    <div className='first_name'>
                        <label htmlFor='register_first_name'>
                            First name
                        </label>
                        <input
                            required
                            name='first_name'
                            id='register_first_name'/>
                    </div>
                    <div className='last_name'>
                        <label htmlFor='register_last_name'>
                            Last name
                        </label>
                        <input
                            required
                            name='last_name'
                            id='register_last_name'/>
                    </div>
                    <div className='register_email'>
                        <label htmlFor='register_email'>
                            Email
                        </label>
                        <input
                            required
                            name='email'
                            id='register_email'/>
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
                    <button type='submit' className='submit-registration-form'>
                    Login
                    </button>
                </form>
            </div>
        )
    }
}
