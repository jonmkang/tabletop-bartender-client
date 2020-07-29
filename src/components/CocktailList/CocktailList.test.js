import React from 'react';
import ReactDOM from 'react-dom';
import CocktailList from './CocktailList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CocktailList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
