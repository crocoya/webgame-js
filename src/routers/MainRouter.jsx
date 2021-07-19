import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export default function MainRouter() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' compoment={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}
