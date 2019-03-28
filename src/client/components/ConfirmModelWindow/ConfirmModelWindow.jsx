import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

class ConfirmModelWindow extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <h1>Hi!!!</h1>, modalRoot,
    );
  }
}

export default ConfirmModelWindow;
