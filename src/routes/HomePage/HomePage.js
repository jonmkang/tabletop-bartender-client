import React, { Component } from 'react'
import './HomePage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'

export default class HomePage extends Component{
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
    }

    handleSearchSuccess = () => {
        const { history } = this.props
        history.push('/cocktailSearch')
    }

    render(){
        return(
            <div>
                <Header />
                <section className='description'>
                    <span className='Tagline_large'>Imagining. Inventing. Imbibing.</span>
                    <p>Find a cocktail that will quench your inner thirst. You can find new cocktails based on specific ingredients you may prefer, flavor note preference without knowing the ingredients, or the cocktail name.  For example, a flavor note would be citrus or floral, while ingredients may include lime juice, simple syrup, or vodka.</p>
                </section>
                <div className='home-page-search'>
                    <SearchBar />
                    <button className='search-link' type="submit" onClick={this.handleSearchSuccess}>Search</button>
                </div>
                <section className='register-text'>
                    <Link to='/register'>
                        <h2>Register now!</h2>
                    </Link>
                    <p>With an active account, you can add your own cocktail! Using the ingredients available in our database, you can make your own creation. This website can be used without signing up, but you cannot add your own creations.</p>
                </section>
            </div>
            
        )
    }
}