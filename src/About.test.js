import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Mermaid from 'react-mermaid';
import ReactDOM from 'react-dom';
import PacificaAbout from './About';
import { stubComponent } from './test_helpers';

stubComponent(Mermaid);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><PacificaAbout /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
