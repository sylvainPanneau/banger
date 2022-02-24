import React, { useEffect } from 'react';
import MessageInput from './MessageInput';

export default function MessagesActions({
  setMessages,
  messages,
  matchId,
}: {
  setMessages: Function;
  messages: Array<any>;
  matchId: string;
}) {
  return (
    <div className="messages-actions">
      <MessageInput messages={messages} setMessages={setMessages} matchId={matchId} />
    </div>
  );
}
