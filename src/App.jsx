import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import './styles/App.less';

const App = () => (
  <div className="wrapper">
    <Header />
    <div className="cover">
      <Content />
    </div>
    <Footer />
  </div>
);

export default App;
