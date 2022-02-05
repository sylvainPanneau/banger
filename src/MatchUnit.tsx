// This component is used to represent one match in the match list.
// It serves as a preview of the messages between the two users.

import React, { useState, useEffect, CSSProperties } from 'react';
import MatchUnitMessages from './MathUnitMessage';
import Prunot from './images/prunot.jpeg';

type MatchUnitProps = {
  animation: CSSProperties;
};

export default function MatchUnit({ animation }: MatchUnitProps) {
  const [mode, setMode] = useState<string>('');
  useEffect(() => {
    setMode('unit');
  }, []);
  return (
    <>
      {mode === 'unit' && (
        <div className="match-unit" style={animation}>
          <div>
            <div
              className="match-info-wrapper"
              onClick={() => setMode('messages')}
            >
              <div className="match-profile-picture">
                <img src={Prunot} alt="profile-picture" />
              </div>
              <div className="match-not-image">
                <h3 className="match-name">Prunot</h3>
                <p className="match-message-preview">
                  Un bon gros fils de pute comme on les aime. Tu veux tamtam?
                </p>
              </div>
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
