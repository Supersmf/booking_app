import React from 'react';
import './Header.less';

const Header = () => (
  <div className="header">
    <div className="header_content">
      <div>
        <h1 className="header_content_title">
        JB
          {' '}
          <span className="header_content_title_span-yellow">FLIGHT-B</span>
        </h1>
      </div>
      <div className="header_content_contactBlock">
        <div className="header_content_contactBlock_contacts">
          <p>TOLL NUMBER</p>
          <div>
            <p className="header_content_contactBlock_contacts_phone">046.369.0239</p>
          </div>
        </div>
        <div className="header_content_contactBlock_groupBtn">
          <ul className="header_content_groupBtn_ul">
            <li className="header_content_groupBtn_btn"><a href="https://#">Sign in</a></li>
            <li className="header_content_groupBtn_btn"><a href="https://#">Agent</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
