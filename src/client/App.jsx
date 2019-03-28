import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
// import ConfirmModelWindow from './components/ConfirmModelWindow';
import './styles/App.less';

const App = () => (
  <div className="wrapper">
    <Header />
    <div className="cover">
      <Content />
    </div>
    <Footer />
    {/* <ConfirmModelWindow /> */}
  </div>
);

export default App;
