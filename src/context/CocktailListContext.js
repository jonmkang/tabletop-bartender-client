import React, { Component } from 'react'
// import information from '../information'

const CocktailListContext = React.createContext({
  CocktailList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setCocktailList: () => {},
})
export default CocktailListContext

export class CocktailListProvider extends Component {
  state = {
    cocktailList: [],
    error: null,
  };

  setCocktailList = cocktailList => {
    this.setState({ cocktailList })
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
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCocktailList: this.setCocktailList,
    }
    return (
      <CocktailListContext.Provider value={value}>
        {this.props.children}
      </CocktailListContext.Provider>
    )
  }
}
