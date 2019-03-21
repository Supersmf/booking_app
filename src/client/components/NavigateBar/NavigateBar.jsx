import React from 'react';
import { NavLink } from 'react-router-dom';
import btns from './btns_content';
import './navigateBar.less';

const NavigateBar = () => (
  <div className="navigateBar">
    <ul className="navigateBar_groupBtn">
      {btns.map(({ id, name, href }) => (
        <li key={id} className="navigateBar_groupBtn_link"><NavLink exact to={href}>{name}</NavLink></li>
      ))}
    </ul>
  </div>
);

export default NavigateBar;
