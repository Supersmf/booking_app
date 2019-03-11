import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigateBar from '../NavigateBar';
import SearchPanel from '../SearchPanel';
import SearchFlight from '../SearchFlight';
import Multicard from '../Multicard';
import AdvantagesBlock from '../AdvantagesBlock';
import './Content.less';

const Content = () => (
  <>
    <NavigateBar />
    <Switch>
      <Route exact path="/" component={SearchPanel} />
      <Route path="/search" component={SearchFlight} />
    </Switch>
    <Multicard />
    <AdvantagesBlock />
  </>

);

export default Content;
