import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../routes/HomePage/HomePage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegisterPage from '../../routes//RegisterPage/RegisterPage'
import CocktailSearch from '../../routes/CocktailSearch/CocktailSearch'
import AddCocktail from '../../routes/AddCocktail/AddCocktail'
import MyCocktailPage from '../../routes/MyCocktailPage/MyCocktailPage'

import "./App.css"

import CocktailListContext from '../../context/CocktailListContext'
import CocktailApiService from '../../services/cocktails-api-service'
import IngredientsApiService from '../../services/ingredients-api-service'
import FlavorsApiService from '../../services/flavors-api-service'



class App extends Component {
  static contextType = CocktailListContext;

  componentDidMount(){
    this.context.clearError()
    CocktailApiService.getCocktails()
      .then(this.context.setCocktailList)
      .catch(this.context.setError)

    IngredientsApiService.getIngredients()
      .then(this.context.setIngredientsList)
      .catch(this.context.setError)

    FlavorsApiService.getFlavors()
      .then(this.context.setFlavorsList)
      .catch(this.context.setError)
  }

  render() {
    return (
      <div className='App'>
        <main className='App_main'>
          <Switch>
            <Route 
              exact 
              path='/'
              component={HomePage}/>
            <Route
              exact 
              path='/login'
              component={LoginPage}/>
            <Route
              exact
              path='/register'
              component={RegisterPage}/>
            <Route
              exact
              path='/cocktailSearch'
              component={CocktailSearch}/>
            <Route
              exact
              path='/addCocktail'
              component={AddCocktail}/>
            <Route
              exact
              path='/myCocktails'
              component={MyCocktailPage}/>
          </Switch>
        </main>
        <footer>Created by Jonathan Kang. 2020.</footer>
      </div>
    )
  }
}

export default App;