import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App';
import './index.css';
import { CocktailListProvider } from './context/CocktailListContext'
import { CocktailProvider } from './context/CocktailContext'

ReactDOM.render(
  <BrowserRouter>
    <CocktailListProvider>
      <CocktailProvider>
        <App />
      </CocktailProvider>
    </CocktailListProvider>
  </BrowserRouter>, document.getElementById('root'));