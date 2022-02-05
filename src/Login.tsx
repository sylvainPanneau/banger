import React from 'react';

export default function Login() {
  return (
    <div className='login-page'>
        <div className='login-page-header'></div>
        <div className='login-page-input'>
            <div className='login-page-input-form'>
                <input className='login-page-input-form-input' type='text' placeholder='Username'/>
                <input className='login-page-input-form-input' type='password' placeholder='Password'/>
                <button className='login-page-input-form-button'>Login</button>
            </div>
        </div>
  </div>
  );
}
