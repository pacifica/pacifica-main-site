import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import AlbatrossSave from './Save';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><AlbatrossSave /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
