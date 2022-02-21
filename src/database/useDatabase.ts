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
  const [initialLength, setInitialLength] = useState<number>(0);

  useEffect(() => {
    if (userId !== '' && userId !== undefined) {
      getMessages();
    }
  }, [userId]);

  useEffect(() => {
    if (messages.length > initialLength) {
      insertMessages(messages[messages.length - 1]);
    }
    const messageDeleteOrigin = supabase
      .from(`interaction:origin=eq.${userId}`)
      .on('DELETE', payload => {
        const newMessages = messages.filter(
          message => message.id !== payload.old.id
        );
        setMessages(newMessages);
      })
      .subscribe();

    const messageDeleteDestination = supabase
      .from(`interaction:destination=eq.${userId}`)
      .on('DELETE', payload => {
        const newMessages = messages.filter(
          message => message.id !== payload.old.id
        );
        setMessages(newMessages);
      })
      .subscribe();

    const messageInsert = supabase
      .from(`userNotifiedMessage:id=eq.${userId}`)
      .on('UPDATE', payload => {
        getLastMessage();
      })
      .subscribe();
  }, [messages]);

  const insertMessages = async (mess: any) => {
    const { data, error } = await supabase.from('interaction').insert([
      {
        origin: supabase.auth.user()?.id as string,
        destination: mess.destination,
        message: mess.message,
      },
    ]);
  };

  const getMessages = async () => {
    const { data, error } = await supabase.rpc('f_getmessages', {
      userid: userId,
      matchid: matchId,
    });
    if (data) {
      setInitialLength(data?.length);
    }
    console.log(data);
    setMessages(data as Array<any>);
  };

  const getLastMessage = async () => {
    const { data, error } = await supabase.rpc('f_getlastmessage', {
      userid: userId,
      matchid: matchId,
    });
    const old = [...messages];
    old.push(data);
    setMessages(old);
  };

  return [messages, setMessages];
}
