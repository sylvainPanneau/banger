import React from 'react';
import MessageInput from './MessageInput';

export default function MessagesActions({
  setMessages,
  messages
}: {
  setMessages: Function;
  messages: Array<any>;
}) {
  return (
    <div className="messages-actions">
      <MessageInput messages={messages} setMessages={setMessages} />
    </div>
  );
}
