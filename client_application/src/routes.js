// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import NotFound from './components/NotFound';
import MainPage from './components/MainPage';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={MainPage} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
