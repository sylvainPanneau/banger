import './App.css';
import Card from './Card';
import NavBar from './NavBar';
import Header from './Header';
import Login from './Login';
import React, { SetStateAction, useEffect, useState } from 'react';
import { supabase } from './setupSupabase';

function App() {
  const { mode, renderHeader } = Header();
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session() as SetStateAction<null>);
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session as SetStateAction<null>);
    });
  }, []);


  return (
    <>
      {!session ? <Login /> : <div className="App">
      {renderHeader}
      <Card mode={mode} userId={supabase.auth.user()?.id as string} />
      {mode === 'card' && <NavBar />}
    </div>}
    </>
  );
}

export default App;
