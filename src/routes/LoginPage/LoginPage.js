import React, { Component } from 'react';
import Header from '../../components/Header/Header'
import './LoginPage.css'
import Login from '../../components/Login/Login'

export default class LoginPage extends Component{
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
      }
    
    render(){

        return(
            <div className='loginPage'>
                <Header loginPage={true}/>
                <Login onLoginSuccess={this.handleLoginSuccess}/>
            </div>
        )
    }
}