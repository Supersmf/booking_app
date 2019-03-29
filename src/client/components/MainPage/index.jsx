import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Content from '../Content';
import './mainPage.less';

const MainPage = () => (
  <div className="wrapper">
    <Header />
    <div className="cover">
      <Content />
    </div>
    <Footer />
  </div>
);

export default MainPage;
