import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import './RegisterPage.css'

export default class RegisterPage extends Component{
    static defaultProps = {
        history: {
            push: () => {},
        },
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/login')
    }
    

    render(){
        return(
            <div>
               <Header loginPage={true}/>
               <RegisterForm onRegistrationSuccess={this.handleRegistrationSuccess} />
            </div>
        )
    }
}