
// Base CSS Reset - rest are css-modules
import 'normalize.css/normalize.css';


// React
import React from 'react';
import { render } from 'react-dom';


// Components
import Header from './components/header/header';


// Render
render(
  <Header />,
  document.getElementById('root')
);
