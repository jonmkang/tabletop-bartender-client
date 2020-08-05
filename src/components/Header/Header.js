import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import CocktailListContext from '../../context/CocktailListContext'
import TokenService from '../../services/token-service'

export default class Header extends Component {
    static contextType = CocktailListContext

    handleLogoutClick = () => {
        this.context.clearUserId();
        TokenService.clearAuthToken();
    }
    
    renderLoginLink() {
        if(!this.props.loginPage){
            return ( 
                <p className='Header_links'>
                    <Link to='/login' >
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
                    <Link to='/addCocktail'>
                        Add Cocktail
                    </Link>
                    <Link to='/myCocktails'>
                        My Cocktails
                    </Link>
                    <Link 
                        onClick={this.handleLogoutClick}
                        to='/' >
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
            {TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                :this.renderLoginLink()}
            </nav>
        </>
    }

}