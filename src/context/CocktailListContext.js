import React, { Component } from 'react'
import config from '../config'

const CocktailListContext = React.createContext({
  cocktailList: [],
  ingredientsList: [],
  searchResults: [],
  flavorsList: [],
  myCocktailList: [],
  user_id: null,
  query: null,
  error: null,
  setError: () => {},
  setUserId: () => {},
  clearError: () => {},
  clearUserId: () => {},
  setMyCocktailList: () => {},
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
    myCocktailList: [],
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

  setUserId = userId => {
    window.sessionStorage.setItem(config.USER_ID, userId)
  }

  setMyCocktailList = myCocktailList => {
    this.setState({ myCocktailList: myCocktailList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  clearUserId = () => {
    window.sessionStorage.setItem(config.USER_ID, null)
  }

  render() {
    const value = {
      cocktailList: this.state.cocktailList,
      ingredientsList: this.state.ingredientsList,
      flavorsList: this.state.flavorsList,
      myCocktailList: this.state.myCocktailList,
      searchResults: this.state.searchResults,
      error: this.state.error,
      user_id: this.state.user_id,
      setUserId: this.setUserId,
      setError: this.setError,
      clearError: this.clearError,
      clearUserId: this.clearUserId,
      setCocktailList: this.setCocktailList,
      setIngredientsList: this.setIngredientsList,
      setFlavorsList: this.setFlavorsList,
      setMyCocktailList: this.setMyCocktailList,
      setSearchResults: this.setSearchResults
    }
    return (
      <CocktailListContext.Provider value={value}>
        {this.props.children}
      </CocktailListContext.Provider>
    )
  }
}
