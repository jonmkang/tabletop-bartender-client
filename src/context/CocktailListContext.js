import React, { Component } from 'react'

const CocktailListContext = React.createContext({
  cocktailList: [],
  ingredientsList: [],
  searchResults: [],
  flavorsList: [],
  query: null,
  error: null,
  setError: () => {},
  clearError: () => {},
  setSearchResults: () => {},
  setCocktailList: () => {},
  setIngredientsList: () => {},
  setFlavorsList: () => {},
  setQuery: () => {}
})
export default CocktailListContext

export class CocktailListProvider extends Component {
  state = {
    cocktailList: [],
    ingredientsList: [],
    flavorsList: [],
    searchResults: [],
    query: null,
    error: null,
  };

  setQuery = query => {
    this.setState({ query })
  }

  setCocktailList = cocktailList => {
    this.setState({ cocktailList })
  }

  setSearchResults = searchResults => {
    this.setState({ searchResults })
  }

  setIngredientsList = ingredientsList => {
    this.setState({ ingredientsList })
  }
  
  setFlavorsList = flavorsList => {
    this.setState({ flavorsList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      cocktailList: this.state.cocktailList,
      ingredientsList: this.state.ingredientsList,
      flavorsList: this.state.flavorsList,
      searchResults: this.state.searchResults,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCocktailList: this.setCocktailList,
      setIngredientsList: this.setIngredientsList,
      setFlavorsList: this.setFlavorsList,
      setSearchResults: this.setSearchResults
    }
    return (
      <CocktailListContext.Provider value={value}>
        {this.props.children}
      </CocktailListContext.Provider>
    )
  }
}
