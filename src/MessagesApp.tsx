import React, { CSSProperties, useEffect } from 'react';
import MatchUnit from './MatchUnit';

type MessagesAppProps = {
  animation: CSSProperties;
  matches: Array<any>;
};

export default function MessagesApp({
  animation,
  matches,
}: MessagesAppProps) {
  return (
    <MatchUnit
      animation={animation}
      matches={matches}
    />
  );
}
