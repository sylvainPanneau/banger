import React, { CSSProperties } from 'react';
import MatchUnit from './MatchUnit';

type MessagesAppProps = {
  animation: CSSProperties;
};

export default function MessagesApp({ animation }: MessagesAppProps) {
  return <MatchUnit animation={animation} />;
}
