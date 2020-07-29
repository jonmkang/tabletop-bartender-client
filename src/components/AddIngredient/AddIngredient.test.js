import React from 'react';
import ReactDOM from 'react-dom';
import AddIngredient from './AddIngredient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddIngredient />, div);
  ReactDOM.unmountComponentAtNode(div);
});
