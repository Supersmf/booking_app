/* eslint-disable react/jsx-pascal-case */
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavigateBar from '../NavigateBar';
import SearchPanel from '../SearchPanel';
import SearchFlight from '../SearchFlight';
import SearchReturnFlight from '../SearchReturnFlight';
import ResultBooked from '../ResultBooked';
import PassengersInfo from '../PassengersInfo';
import MultiСard from '../MultiСard';
import AdvantagesBlock from '../AdvantagesBlock';
import './content.less';

const Content = () => (
  <Fragment>
    <NavigateBar />
    <Switch>
      <Route exact path="/" component={SearchPanel} />
      <Route exact path="/search" component={SearchFlight} />
      <Route exact path="/search/return" component={SearchReturnFlight} />
      <Route exact path="/search/result" component={ResultBooked} />
      <Route exact path="/search/result/passengers" component={PassengersInfo} />
    </Switch>
    <MultiСard />
    <AdvantagesBlock />
  </Fragment>

);

export default Content;
