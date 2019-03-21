import React from 'react';
import btns from './btns_content';
import './navigateLinks.less';

const NavigateLinks = () => (
  <div>
    <ul className="footer_content_groupBtn">
      {btns.map(({ id, name, href }) => (
        <li key={id} className="footer_content_groupBtn_link">
          <a href={href}>{name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default NavigateLinks;
