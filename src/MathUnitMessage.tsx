import React, { useState, useEffect, CSSProperties } from 'react';
import MessagesActions from './MessagesActions';
import MessagesBody from './MessagesBody';
import MessageHeader from './MessagesHeader';

type MatchUnitMessagesProps = {
  setMode: (v: string) => void;
  animation: CSSProperties;
};

export default function MatchUnitMessages({
  setMode,
  animation,
}: MatchUnitMessagesProps) {
  return (
    <div className="match-unit-messages" style={animation}>
      <MessageHeader setMode={setMode} />
      <MessagesBody />
      <MessagesActions />
    </div>
  );
}
