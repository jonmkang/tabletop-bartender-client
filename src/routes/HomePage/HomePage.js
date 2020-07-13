import React, { Component } from 'react'
import './HomePage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'

export default class HomePage extends Component{

    render(){
        return(
            <div>
                <Header />
                <section className='description'>
                    <span className='Tagline_large'>Imagining. Inventing. Imbibing.</span>
                    <p>Find a cocktail that will quench your inner thirst. You can find new cocktails based on specific ingredients you may prefer, flavor note preference without knowing the ingredients, or a main liquor preference.  For example, a flavor note would be citrus or floral, while liquor preference may include vodka or whiskey.</p>
                </section>
                <SearchBar/>
                <section className='register-text'>
                    <h2>Register now!</h2>
                    <p>With an active account, you can add your own cocktail! Using the ingredients available in our database, you can add your own twist and style to our website. This website can be used without signing up, but you cannot add your own creations.</p>
                    <Link to='/register'>
                        Click here to register
                    </Link>
                </section>
            </div>
            
        )
    }
}