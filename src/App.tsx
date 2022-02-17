import './App.css';
import Card from './Card';
import NavBar from './NavBar';
import Header from './Header';
import Login from './Login';
import React, { useEffect, useState } from 'react';
import { supabase } from './setupSupabase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSession, useUserId, useMatches } from './database/useDatabase';
import { Session } from '@supabase/supabase-js';


function App() {
  const { mode, renderHeader } = Header();
  const [session, setSession] = useSession();
  const [userId, setUserId] = useUserId(session as Session);
  const [matches, setMatches] = useMatches(userId as string);

  return (
    <>
      {!session ? (
        <Login />
      ) : (
        <div className="App">
          {renderHeader}
          <Card mode={mode} userId={userId as string} matches={matches as Array<any>} />
          {mode === 'card' && <NavBar />}
        </div>
      )}
    </>
  );
}

export default App;
