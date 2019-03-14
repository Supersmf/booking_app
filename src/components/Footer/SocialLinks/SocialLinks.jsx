import React from 'react';
import btns from './socialBtns_content';
import './socialLinks.less';

const SocialLinks = () => (
  <div>
    <ul className="footer_content_groupSocial">
      {btns.map(({ id, iconClass, href }) => (
        <li key={id} className="footer_content_groupSocial_link">
          <a href={href}>
            <i className={iconClass} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default SocialLinks;
