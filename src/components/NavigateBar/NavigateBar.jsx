import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigateBar.less';

const NavigateBar = () => (
  <div className="navigateBar">
    <ul className="navigateBar_groupBtn">
      <li className="navigateBar_groupBtn_link"><NavLink exact to="/">Home</NavLink></li>
      <li className="navigateBar_groupBtn_link"><a href="https://#">Domestic Flight</a></li>
      <li className="navigateBar_groupBtn_link"><a href="https://#">Best Deals</a></li>
      <li className="navigateBar_groupBtn_link"><a href="https://#">Services</a></li>
      <li className="navigateBar_groupBtn_link"><a href="https://#">About Us</a></li>
      <li className="navigateBar_groupBtn_link"><a href="https://#">Contact Us</a></li>
    </ul>
  </div>
);

export default NavigateBar;
