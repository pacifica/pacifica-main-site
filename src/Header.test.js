import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import PacificaHeader from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><PacificaHeader /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
