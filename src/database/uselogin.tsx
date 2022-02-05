import React, { createContext, useContext, useState } from 'react';
import { supabase } from '../setupSupabase';

const AuthContext = createContext<
  | { user: any; authenticate: (email: string) => void; logout: () => void }
  | undefined
>(undefined);

/**
 * To use inside the auth provider component
 * hook to handle auth related stuff
 * @returns an object with the current user (nullable) a function to signin, and to signout
 */
export function useLogin() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('This should be used inside AuthProvider component');
  }
  return context;
}

/**
 * Should be used at the top of the app
 * A provider to make auth related stuff available
 * to all children
 */
export function AuthProvider(props: { children: JSX.Element }) {
  const [user, setUser] = useState<any | null>(null);

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      setUser(session?.user);
    }
  });

  const authenticate = (email: string) => supabase.auth.signIn({ email });

  const logout = () => {
    supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, authenticate, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
