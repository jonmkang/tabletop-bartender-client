import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import './LoginPage.css'
import Login from '../../components/Login/Login'

export default class LoginPage extends Component{

    render(){
        return(
            <div className='loginPage'>
                <Header loginPage={true}/>
                <Login/>
            </div>
        )
    }
}