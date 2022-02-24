import { Session } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';
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
    const { data, error } = await supabase.rpc('f_getmatchinfo', {
      selfid: userId,
    });
    setMatches(data as Array<any>);
  };

  useEffect(() => {
    if (userId !== '' && userId !== undefined) {
      getMatch();
      const matchDeleteUserA = supabase
        .from(`match:userA=eq.${userId}`)
        .on('*', payload => {
          const newMatches = matches.filter(
            match =>
              match.userA !== payload.old.userA &&
              match.userB !== payload.old.userB
          );
          setMatches(newMatches);
          console.log(payload);
        })
        .subscribe();

      const matchDeleteUserB = supabase
        .from(`match:userB=eq.${userId}`)
        .on('*', payload => {
          const newMatches = matches.filter(
            match =>
              match.userA !== payload.old.userA &&
              match.userB !== payload.old.userB
          );
          setMatches(newMatches);
          console.log(payload);
        })
        .subscribe();

      const matchInsert = supabase
        .from(`userNotifiedMatch:id=eq.${userId}`)
        .on('UPDATE', payload => {
          getMatch();
        })
        .subscribe();
    }
  }, [userId]);

  return [matches, setMatches];
}

export function useMessages(userId: string, matchId: string) {
  const [messages, setMessages] = useState<Array<any>>([]);

  useEffect(() => {
    if (userId !== '' && userId !== undefined) {
      const localData = localStorage.getItem('messages');
      if (localData) {
        const localMessages = JSON.parse(localData);
        if (localMessages.length > 0) {
          setMessages(localMessages);
        }
      }
      const getMessages = async () => {
        const { data, error } = await supabase.rpc('f_getmessages', {
          userid: userId,
          matchid: matchId,
        });
        console.log(data);
        setMessages(data as Array<any>);
      };
      getMessages();
    }
  }, []);

  useEffect(() => {
    const messageDeleteOrigin = supabase
      .from(`interaction:origin=eq.${userId}`)
      .on('DELETE', payload => {
        console.log(payload);
        console.log("messages", messages);
        const newMessages = messages.filter(
          message => message.id !== payload.old.id
        );
        setMessages(newMessages);
      })
      .subscribe();

    const messageDeleteDestination = supabase
      .from(`interaction:destination=eq.${userId}`)
      .on('DELETE', payload => {
        console.log("payload", payload);
        console.log("messages", messages);
        const newMessages = messages.filter(
          message => message.id !== payload.old.id
        );
        setMessages(newMessages);
      })
      .subscribe();

    const messageInsert = supabase
      .from(`interaction`)
      .on('INSERT', payload => {
        if (payload.new.destination === userId && payload.new.origin === matchId) {
          setMessages([...messages, payload.new]);
        }
      })
      .subscribe();
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  return [messages, setMessages];
}

