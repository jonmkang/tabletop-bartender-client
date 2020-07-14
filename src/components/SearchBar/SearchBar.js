import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './SearchBar.css'

export default class SearchBar extends Component{

    handleOnSubmit = e => {
        e.preventDefault()
        this.setState({ error: null })
    }

    render(){
        return(
            <form className='cocktail-search'>
                <div className='search-category'>
                    <label htmlFor="search">Search by: </label>
                    <select 
                        required
                        aria-label='Search by'
                        name='search'
                        id='search'
                        >
                        <option value="liquor">Base Liquor</option>
                        <option value="flavor">Flavor Note</option>
                        <option value="ingredient">Ingredient</option>
                    </select>
                </div>
                <div className="query-box">
                    <input 
                        aria-label="What are you searching for"
                        name="query"
                        id="query"
                        />
                    <Link to='/cocktailSearch'>
                        <button type="submit">Search</button>
                    </Link>
                </div>
            </form>
        )
    }
}