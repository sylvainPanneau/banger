import React, { useEffect, useRef, useState } from 'react';
import { supabase } from './setupSupabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function keyListener(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      console.log(email);
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
      const { error } = await supabase.auth.signIn({ email });
      if (error) {
        console.log(error);
      } else {
        setSent(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setSent(false);
      }, 3000);
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
            autoComplete="off"
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
          <input
            id="the-only-purpose-of-this-input-is-to-prevent-autofill..."
            type="text"
            autoComplete="on"
            value=""
            style={{
              display: 'none',
              opacity: 0,
              position: 'absolute',
              left: '-100000px',
            }}
            readOnly={true}
          />
          <button
            className="login-page-input-form-button btn btn-white btn-animate"
            onSubmit={handleLogin}
            onClick={handleLogin}
          >
            {sent ? 'Check your inbox 😊' : 'Email login link'}
          </button>
        </div>
      </div>
    </div>
  );
}
