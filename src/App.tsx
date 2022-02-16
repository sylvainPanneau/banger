import './App.css';
import Card from './Card';
import NavBar from './NavBar';
import Header from './Header';
import Login from './Login';
import React, { SetStateAction, useEffect, useState } from 'react';
import { supabase } from './setupSupabase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const { mode, renderHeader } = Header();
  const [session, setSession] = useState(null);
  const [userId, setUserId] = useState<string>('');
  const [matches, setMatches] = useState<Array<any>>([]);

  const getMatch = async () => {
    try {
      const { data, error } = await supabase.rpc('f_getmatchinfo', {
        selfid: userId,
      });
      setMatches(data as Array<any>);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setSession(supabase.auth.session() as SetStateAction<null>);
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session as SetStateAction<null>);
    });
    setUserId(supabase.auth.user()?.id as string);
  }, []);

  useEffect(() => {
    if (userId !== '') {
      getMatch();
      const matchSubscriptionUserA = supabase
        .from(`match:userA=eq.${userId}`)
        .on('*', payload => {
          console.log('changed', payload);
        })
        .subscribe();

      const matchSubscriptionUserB = supabase
        .from(`match:userB=eq.${userId}`)
        .on('*', payload => {
          console.log('changed', payload);
        })
        .subscribe();
      return () => {
        supabase.removeSubscription(matchSubscriptionUserA);
        supabase.removeSubscription(matchSubscriptionUserB);
      };
    }
  }, [userId]);

  return (
    <>
      {!session ? (
        <Login />
      ) : (
        <div className="App">
          {renderHeader}
          <Card mode={mode} userId={userId} matches={matches} />
          {mode === 'card' && <NavBar />}
        </div>
      )}
    </>
  );
}

export default App;
