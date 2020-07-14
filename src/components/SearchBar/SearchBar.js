import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';
// import information from '../../information';

export default class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state={
            searchValue: 'baseLiquor',
            error: null
        }
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.setState({ error: null })
    }

    changeSearchValue = e => {
        const newValue = e.target.value;
        this.setState({
            searchValue: newValue
        })
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
                        onChange={this.changeSearchValue}
                        >
                        <option value="baseLiquor">Base Liquor</option>
                        <option value="flavorNotes">Flavor Note</option>
                        <option value="ingredients">Ingredient</option>
                    </select>
                </div>
                <div className="query-box">
                    <input className='searchList' list="searchItems" name="searchBy"/>
                        {/* <datalist id="searchItems" style={{display:'none'}}>
                            {information[this.state.searchValue].map((item, id) => <option key={id}>{item}</option>)}
                        </datalist> */}
                    <Link to='/cocktailSearch'>
                        <button type="submit">Search</button>
                    </Link>
                </div>
            </form>
        )
    }
}