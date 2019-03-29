import React from 'react';
import { Link } from 'react-router-dom';
import './header.less';

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
            <Link to="login" className="header_content_groupBtn_btn">Sign in</Link>
            <Link to="agent" className="header_content_groupBtn_btn">Agent</Link>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
