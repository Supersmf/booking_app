import React from 'react';
// import { Link } from 'react-router-dom';
import './loginForm.less';

const LoginForm = () => (
  <div className="loginForm-content">
    <div className="loginForm-content_LoginBlock">
      <form className="loginForm-content_LoginBlock_form">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  </div>
);

export default LoginForm;
