import React, { useEffect, useState } from 'react';
import { supabase } from './setupSupabase';

type AuthProps = {
  userEmail: string;
};

export default function Auth({userEmail}: AuthProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  useEffect(() => {
    setEmail(userEmail);
  }, []);
  useEffect(() => {
    setEmail(userEmail);
  }, [userEmail]);

  const handleLogin = async (email: string) => {
    try {
      console.log('email', email);
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) alert(error.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return <div></div>;
}
