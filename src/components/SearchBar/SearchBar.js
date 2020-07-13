import React, { Component } from 'react';
import './SearchBar.css'

export default class SearchBar extends Component{


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
                    <button type="submit">Search</button>
                </div>
            </form>
        )
    }
}