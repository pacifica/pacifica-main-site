import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import PacificaCarousel from './Carousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><PacificaCarousel /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
