import React, { useState } from 'react';
import Profile from './images/svg/user-solid.svg?component';
import Messages from './images/svg/comment-solid.svg?component';
import { supabase } from './setupSupabase';

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
        <button className="logout-btn" onClick={() => supabase.auth.signOut()}>Logout</button>
      </div>
    ),
  };
}
