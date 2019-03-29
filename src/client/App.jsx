import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginForm from './components/LoginForm';
import './styles/App.less';

const App = () => (
  <Fragment className="wrapper">
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route path="/" component={MainPage} />
    </Switch>
  </Fragment>
);

export default App;
