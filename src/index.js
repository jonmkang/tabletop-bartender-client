import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App';
import './index.css';
import { CocktailListProvider } from './context/CocktailListContext'

ReactDOM.render(
  <BrowserRouter>
    <CocktailListProvider>
      <App/>
    </CocktailListProvider>
  </BrowserRouter>, document.getElementById('root'));