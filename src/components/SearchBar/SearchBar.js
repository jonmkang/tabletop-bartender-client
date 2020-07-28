import React, { Component } from 'react';
import './SearchBar.css';
// import { Link } from 'react-router-dom'
import CocktailListContext from '../../context/CocktailListContext'
import Select from 'react-select'

export default class SearchBar extends Component{
    static contextType = CocktailListContext

    constructor(props){
        super(props)
        this.state={
            searchCategory: 'name',
            searchQuery: '',
            error: null,
            searchItems: ''
        }
    }

    //This filters based on the searched category and values searched. This will set a "search results list" to be rendered in CocktailList.  If nothing is returned, the base case is to return all cocktails.
    handleOnSubmit = e => {
        this.setState({ error: null })
        const searchCategory= this.state.searchCategory;
        const { cocktailList } = this.context;

        switch(searchCategory){
            case "flavorNotes":
                return this.context.setSearchResults(cocktailList.filter(item => item.flavor === this.state.searchQuery))
            case "ingredients":
                this.context.setSearchResults(cocktailList.filter(item => {
                    for(const [key, value] of Object.entries(item)){
                        if(value && key.includes("ingredient")){
                            if(value === this.state.searchQuery)
                                return true
                        }
                    }
                    return false
                }))
                break;
            case "name":
                return this.context.setSearchResults(cocktailList.filter(item => item.id === this.state.searchQuery))
            default: 
                return this.context.setSearchResults(cocktailList)
        }
    }

    changeSearchCategory = e => {
        const newCategory = e.target.value;
        this.setState({
            searchCategory: newCategory,
        })
    }

    changeSearchQuery = e => {
        const newValue = e.value;
        this.setState({
            searchQuery: newValue
        })
        setTimeout(this.handleOnSubmit, 1)
    }

    setSearchItems(items){
        this.setState({ searchItems: items })
    }

    render(){        
        const searchItems = []
        const { cocktailList, flavorsList, ingredientsList } = this.context

        //This changes the Select options choices based on what search category is selected
        switch(this.state.searchCategory){
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
            <form className='cocktail-search' onChange={this.handleOnSubmit}>
                <div className='search-category'>
                    <label htmlFor="search">Search by: </label>
                    <select 
                        required
                        aria-label='Search by'
                        name='search'
                        id='search'
                        onChange={this.changeSearchCategory}
                        onSubmit={this.searchCocktails}
                        >
                        <option value="name">Cocktail Name</option>
                        <option value="flavorNotes">Flavor Note</option>
                        <option value="ingredients">Ingredient</option>
                    </select>
                </div>
                <div className="query-box">
                    <Select className="select" onChange={this.changeSearchQuery} options={searchItems}/>
                </div>
            </form>
        )
    }
}