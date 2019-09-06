import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import TabPanel from './containers/TabPanelContainer';
import NotFound from './containers/NotFoundContaner';
import About from './containers/AboutContainer';
import Counters from './containers/CountCounterContainer';
import Login from './containers/LoginContainer';

const AppRouter = () => (
  <Router>
    <TabPanel />
    <Switch>
      <Route exact path="/" />
      <Route path="/about" component={About} />
      <Route path="/counters" component={Counters} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default AppRouter;
