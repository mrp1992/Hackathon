// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import NotFound from './components/NotFound';
import MainPage from './components/MainPage';
import WrappedHorizontalLoginForm from './components/Login';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={WrappedHorizontalLoginForm} />
    <Route path="/lsapp" component={MainPage} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
