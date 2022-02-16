import React, { CSSProperties, useEffect } from 'react';
import MatchUnit from './MatchUnit';

type MessagesAppProps = {
  animation: CSSProperties;
  userId: string;
  matches: Array<any>;
};

export default function MessagesApp({ animation, userId, matches }: MessagesAppProps) {
  return <MatchUnit animation={animation} userId={userId} matches={matches} />;
}
