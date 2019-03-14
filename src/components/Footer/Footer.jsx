import React from 'react';
import NavigateLinks from './NavigateLinks';
import SocialLinks from './SocialLinks';
import './footer.less';

const Footer = () => (
  <div className="footer">
    <div className="footer_content">
      <NavigateLinks />
      <SocialLinks />
    </div>
  </div>
);

export default Footer;
