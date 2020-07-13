import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import './RegisterPage.css'

export default class RegisterPage extends Component{

    render(){
        return(
            <div>
               <Header loginPage={true}/>
               <RegisterForm/>
            </div>
        )
    }
}