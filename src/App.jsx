import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
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
