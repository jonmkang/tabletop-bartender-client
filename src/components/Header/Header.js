import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    // handleLogoutClick = () => {
    //     TokenService.clearAuthToken()
    //   }
    

    renderLoginLink() {
        if(!this.props.loginPage){
            return ( 
                <p className='Header_links'>
                    <Link to='/login'>
                        Login
                    </Link>     
                    <Link to='/register'>
                        Register
                    </Link>
                </p>
            )
        }
    }

    renderLogoutLink(){
        if(!this.props.loginPage){
            return (
                <p className='Header_links'>
                    <Link>
                        Logout
                    </Link>
                </p>
            )
        }
    }
    
    render() {
        return <>
            <nav className='Header'>
            <h1>
                <Link to='/'>
                {' '}
                Tabletop Bartender
                </Link>
            </h1>
            <span className='Header_tagline'>Imagining. Inventing. Imbibing.</span>
            {this.renderLoginLink()}
            </nav>
        </>
    }

}