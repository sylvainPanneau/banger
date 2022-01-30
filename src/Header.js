import React, { useState, useEffect } from 'react';
import { ReactComponent as Profile } from './images/svg/user-solid.svg';
import { ReactComponent as Messages } from './images/svg/comment-solid.svg';

export default function Header() {
  const [mode, setMode] = useState('card');
  function handleMessageClick() {
    mode === 'card' ? setMode('message') : setMode('card');
  }
  return {
    mode,
    renderHeader: (
      <div className="header">
        <Profile className="header-profile" />
        <Messages onClick={handleMessageClick} className="header-messages" />
      </div>
    ),
  };
}
