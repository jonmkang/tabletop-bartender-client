import React from 'react';
import ReactDOM from 'react-dom';
import Flavor from './Flavor';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Flavor />, div);
  ReactDOM.unmountComponentAtNode(div);
});
