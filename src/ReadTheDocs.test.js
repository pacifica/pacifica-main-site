import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import PacificaDocs from './ReadTheDocs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><PacificaDocs /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
