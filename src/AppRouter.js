import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import TabPanel from './containers/TabPanelContainer';
import NotFound from './containers/NotFoundContaner';
import About from './containers/AboutContainer';
import Counters from './containers/CountCounterContainer';
import Login from './containers/LoginContainer';
import LoginRedux from './containers/LoginReduxContainer';
import LoginReduxForm from './containers/LoginReduxFormContainer';
import LoginSuccess from './containers/LoginSucessContainer';
import LoginReduxFormSuccess from './containers/LoginReduxFormSuccessContainer';

const AppRouter = () => (
  <Router>
    <TabPanel />
    <Switch>
      <Route exact path="/" />
      <Route path="/about" component={About} />
      <Route path="/counters" component={Counters} />
      <Route path="/login" component={Login} />
      <Route exact path="/login-redux" component={LoginRedux} />
      <Route path="/login-redux/success" component={LoginSuccess} />
      <Route exact path="/login-redux-form" component={LoginReduxForm} />
      <Route path="/login-redux-form/success" component={LoginReduxFormSuccess} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default AppRouter;
