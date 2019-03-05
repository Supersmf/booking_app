import React from 'react';
import LinkBox from './linkBox';
import './advantages.less';

const links = [
  'Cash on delivery service of bus tickets in major cities',
  'Book online using credit, debit cards and net banking',
  'Book bus tickets online or over IVR through our call centers',
  'Book bus tickets online or over 700 bus travel operators',
  'Return bus tickets reservation',
  'Return bus tickets reservation',
];

const Advantages = () => (
  <div className="advantages-container">
    <h2 className="advantages-container_title">JB Advantages-A</h2>
    <div className="advantages-container_listGroup">
      <LinkBox links={links} />
      <LinkBox links={links} />
    </div>
    <div className="advantages-container_btnContainer">
      <a href="https://#" className="advantages-container_btnContainer_link">view more</a>
    </div>
  </div>
);

export default Advantages;
