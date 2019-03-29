import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

const LoginModelWindow = () => (
  ReactDOM.createPortal(
    <div>
      <h1>Hi!!!</h1>
    </div>,
    modalRoot,
  )
);

export default LoginModelWindow;
