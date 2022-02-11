import React, { useEffect } from 'react';

export default function Login() {
  function keyListener(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      const btn = document.getElementsByClassName('btn')[0];
      btn.classList.add('btn-hover');
      setTimeout(() => {
        btn.classList.add('btn-active');
      }, 500);
      setTimeout(() => {
        btn.classList.remove('btn-active');
        btn.classList.remove('btn-hover');
      }, 1000);
    }    
  }

  useEffect(() => {
    document.addEventListener('keypress', keyListener);
    return () => {
      document.removeEventListener('keypress', keyListener);
    };
  }, []);

  return (
    <div className="login-page">
      <div className="login-page-header"></div>
      <div className="login-page-input">
        <div className="login-page-input-form">
          <div className="login-input-wrapper">
            <input
              className="login-page-input-form-input"
              type="text"
              placeholder="Username"
            />
            <input
              className="login-page-input-form-input"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="login-page-input-form-button">
            <a href="#" className="btn btn-white btn-animate">
              Login
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
