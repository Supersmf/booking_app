import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginForm from './components/LoginForm';
import 'typeface-roboto';
import './styles/App.less';

const App = () => (
  <div className="wrapper">
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;
