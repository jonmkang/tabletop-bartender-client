import React from 'react';
import ReactDOM from 'react-dom';
import AddCocktailForm from './AddCocktailForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddCocktailForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
