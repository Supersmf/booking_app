import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="footer">
  	<div className="footer_content">
			<ul className="footer_content_groupBtn">
				<li className="footer_content_groupBtn_link"><a href="https://#">Home</a></li>
				<li className="footer_content_groupBtn_link"><a href="https://#">Holiday Packages</a></li>
				<li className="footer_content_groupBtn_link"><a href="https://#">Best Deals</a></li>
				<li className="footer_content_groupBtn_link"><a href="https://#">Services</a></li>
				<li className="footer_content_groupBtn_link"><a href="https://#">About Us</a></li>
				<li className="footer_content_groupBtn_link"><a href="https://#">Contact Us</a></li>
			</ul>
			<ul className="footer_content_groupSocial">
				<li className="footer_content_groupSocial_link"><a href="https://#"><i className="sprite sprite-twitter"></i></a></li>
				<li className="footer_content_groupSocial_link"><a href="https://#"><i className="sprite sprite-facebook"></i></a></li>
				<li className="footer_content_groupSocial_link"><a href="https://#"><i className="sprite sprite-google_plus"></i></a></li>				
				<li className="footer_content_groupSocial_link"><a href="https://#"><i className="sprite sprite-chat"></i></a></li>
			</ul>
		</div>
  </div>
);

export default Footer;