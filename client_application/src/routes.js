// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import NotFound from './components/NotFound';
import MainPage from './components/MainPage';
import SignatureApp from './components/SignatureApp';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={MainPage} />
    <Route path="/SignatureApp/*" component={SignatureApp} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
