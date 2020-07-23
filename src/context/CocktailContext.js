import React, { Component } from 'react'

export const nullCocktail = {
  author: {},
  tags: [],
}

const CocktailContext = React.createContext({
  cocktail: nullCocktail,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setCocktail: () => {},
  clearCocktail: () => {},
})

export default CocktailContext

export class CocktailProvider extends Component {
  state = {
    cocktail: nullCocktail,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setCocktail = cocktail => {
    this.setState({ cocktail })
  }

  clearCocktail = () => {
    this.setCocktail(nullCocktail)
    this.setReviews([])
  }

  render() {
    const value = {
      Cocktail: this.state.Cocktail,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCocktail: this.setCocktail,
      clearCocktail: this.clearCocktail,

    }
    return (
      <CocktailContext.Provider value={value}>
        {this.props.children}
      </CocktailContext.Provider>
    )
  }
}
