// This component is used to represent one match in the match list.
// It serves as a preview of the messages between the two users.

import React, { useState, useEffect, CSSProperties } from 'react';
import MatchUnitMessages from './MathUnitMessage';
import Prunot from './images/prunot.jpeg';
import { supabase } from './setupSupabase';
import { v4 as uuidv4 } from 'uuid';

type MatchUnitProps = {
  animation: CSSProperties;
  userId: string;
  matches: Array<any>;
};

export default function MatchUnit({ animation, userId, matches }: MatchUnitProps) {
  const [mode, setMode] = useState<string>('');

  useEffect(() => {
    setMode('unit');
  }, []);

  useEffect(() => {
    console.log(matches);
  }, [matches]);

  return (
    <>
      {mode === 'unit' && (
        <div className="match-unit" style={animation}>
          <div className="match-info-wrapper-wrapper">
            <div
              className="match-info-wrapper"
              onClick={() => setMode('messages')}
            >
              <div className="match-profile-picture">
                <img src={Prunot} alt="profile-picture" />
              </div>
              {matches.map(match => (
                <div className="match-not-image" key={uuidv4()}>
                  <h3 className="match-name">{match.name}</h3>
                  <p className="match-message-preview">{match.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {mode === 'messages' && (
        <MatchUnitMessages animation={animation} setMode={setMode} />
      )}
    </>
  );
}
