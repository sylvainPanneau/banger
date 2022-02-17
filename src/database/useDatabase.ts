import { Session } from '@supabase/supabase-js';
import React, { SetStateAction, useEffect, useState } from 'react';
import { supabase } from '../setupSupabase';

export function useSession() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return [session, setSession];
}

export function useUserId(session: Session) {
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    if (session) setUserId(supabase.auth.user()?.id as string);
  }, [session]);

  return [userId, setUserId];
}

export function useMatches(userId: string) {
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
    if (userId !== '' && userId !== undefined) {
      getMatch();
      const matchDeleteUserA = supabase
        .from(`match:userA=eq.${userId}`)
        .on('*', payload => {
          setMatches([[payload.new]]);
          console.log(payload);
        })
        .subscribe();

      const matchDeleteUserB = supabase
        .from(`match:userB=eq.${userId}`)
        .on('*', payload => {
          setMatches([[payload.new]]);
          console.log(payload);
        })
        .subscribe();

      const matchInsert = supabase
        .from(`users:id=eq.${userId}`)
        .on('UPDATE', payload => {
          getMatch();
        })
        .subscribe(); 
    }
  }, [userId]);

  return [matches, setMatches];
}
