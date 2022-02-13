import React, { useState } from 'react';
import Profile from './images/svg/account_circle_black_24dp.svg?component';
import Messages from './images/svg/chat_black_24dp.svg?component';
import Logout from './images/svg/logout_black_24dp.svg?component';
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
        <Logout className="header-logout" onClick={() => supabase.auth.signOut()}/>
        <Messages onClick={handleMessageClick} className="header-messages" />
      </div>
    ),
  };
}
