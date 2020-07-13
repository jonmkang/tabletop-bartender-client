import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component{

    render(){
        return (
            <div className='login'>
                <form className="login-form">
                    <div className='user_name'>
                        <label htmlFor='LoginForm__user_name'>
                            Username
                        </label>
                        <input
                            required
                            name='user_name'
                            id='LoginForm__user_name'/>
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
                    <button type='submit' className='submit-login'>
                    Login
                    </button>
                </form>
            </div>
        )
    }
}