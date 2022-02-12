import React, { useEffect, useRef, useState } from 'react';
import Auth from './Auth';
import { supabase } from './setupSupabase';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

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

  const handleLogin = async () => {
    try {
      console.log('email', email);
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) alert(error.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
        <input
              id="email"
              className="login-page-input-form-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  handleLogin();
                }
              }}
            />
          <button className="login-page-input-form-button">
            <a
              href="#"
              className="btn btn-white btn-animate"
              onSubmit={handleLogin}
              onClick={handleLogin}
            >
              Email a login link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
