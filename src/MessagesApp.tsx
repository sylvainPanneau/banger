import React, { CSSProperties } from 'react';
import MatchUnit from './MatchUnit';

type MessagesAppProps = {
  animation: CSSProperties;
  userId: string;
};

export default function MessagesApp({ animation, userId }: MessagesAppProps) {
  return <MatchUnit animation={animation} userId={userId} />;
}
