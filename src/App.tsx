import './App.css';
import Card from './Card';
import NavBar from './NavBar';
import Header from './Header';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  useSession,
  useUserId,
  useMatches,
  useMessages,
} from './database/useDatabase';
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
          <Card
            mode={mode}
            matches={matches as Array<any>}
          />
          {mode === 'card' && <NavBar />}
        </div>
      )}
    </>
  );
}

export default App;
