import React, { Component } from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom'
import CocktailListContext from '../../context/CocktailListContext'
import Select from 'react-select'

export default class SearchBar extends Component{
    static contextType = CocktailListContext
    // static defaultProps = {
    //     onSearchSuccess: () => {},
    //     history: {
    //         push: () => {
    //         },
    //     }
    // }

    constructor(props){
        super(props)
        this.state={
            searchValue: 'name',
            searchQuery: '',
            error: null,
            searchItems: ''
        }
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.setState({ error: null })
        const searchCategory = this.state.searchValue;
        const history = this.props
        console.log(searchCategory, history)

        
    }

    changeSearchValue = e => {
        const newValue = e.target.value;
        this.setState({
            searchValue: newValue,
        })
    }

    changeSearchQuery = e => {
        const newValue = e;
        this.setState({
            searchQuery: newValue
        })
    }

    setSearchItems(items){
        this.setState({ searchItems: items })
    }

    render(){        
        const searchItems = []
        const { cocktailList, flavorsList, ingredientsList } = this.context

        //This changes the Select options choices based on what search category is selected
        switch(this.state.searchValue){
            case "flavorNotes":
                if(flavorsList.length > 0){
                    flavorsList.forEach(item=> searchItems.push({ value: item.id, label: item.title }))
                }
                break;
            case "ingredients":
                if(ingredientsList.length > 0){
                    ingredientsList.forEach(item=> searchItems.push({ value: item.id, label: item.title }))
                }
                break;
            default:
                if(cocktailList.length > 0){
                    cocktailList.forEach(item=> searchItems.push({ value: item.id, label: item.title }))
                }
        }

        return(
            <form className='cocktail-search' onSubmit={this.handleOnSubmit}>
                <div className='search-category'>
                    <label htmlFor="search">Search by: </label>
                    <select 
                        required
                        aria-label='Search by'
                        name='search'
                        id='search'
                        onChange={this.changeSearchValue}
                        onSubmit={this.searchCocktails}
                        >
                        <option value="name">Cocktail Name</option>
                        <option value="flavorNotes">Flavor Note</option>
                        <option value="ingredients">Ingredient</option>
                    </select>
                </div>
                <div className="query-box">
                    <Select className="select" onChange={this.changeSearchQuery} options={searchItems}/>
                    <Link to='/cocktailSearch'>
                        <button className='submit' type="submit">Search</button>
                    </Link>
                </div>
            </form>
        )
    }
}