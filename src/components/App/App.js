import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../../routes/HomePage/HomePage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegisterPage from '../../routes//RegisterPage/RegisterPage'
import CocktailSearch from '../../routes/CocktailSearch/CocktailSearch'
import "./App.css"
import information from '../../information'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cocktails: [information.cocktails]
    }
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
          </Switch>
        </main>
        <footer>Created by Jonathan Kang. 2020.</footer>
      </div>
    )
  }
}

export default App;