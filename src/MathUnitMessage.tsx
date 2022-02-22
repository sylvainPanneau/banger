import React, { useState, useEffect, CSSProperties } from 'react';
import MessagesActions from './MessagesActions';
import MessagesBody from './MessagesBody';
import MessageHeader from './MessagesHeader';
import { useMessages } from './database/useDatabase';
import { supabase } from './setupSupabase'

type MatchUnitMessagesProps = {
  setMode: (v: string) => void;
  animation: CSSProperties;
  matchId: string;
};

export default function MatchUnitMessages({
  setMode,
  animation,
  matchId,
}: MatchUnitMessagesProps) {
  const [messages, setMessages] = useMessages(supabase.auth.user()?.id as string, matchId as string);
  return (
    <div className="match-unit-messages" style={animation}>
      <MessageHeader setMode={setMode} />
      <MessagesBody messages={messages as any} />
      <MessagesActions messages={messages as Array<any>} setMessages={setMessages as Function} />
    </div>
  );
}
