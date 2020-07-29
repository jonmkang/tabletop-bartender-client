import React from 'react';
import ReactDOM from 'react-dom';
import Cocktail from './Cocktail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cocktail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
