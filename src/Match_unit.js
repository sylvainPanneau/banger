// This component is used to represent one match in the match list.
// It serves as a preview of the messages between the two users.

import React, { useState, useEffect } from 'react';
import Match_unit_messages from './Match_unit_messages';
import Prunot from './images/prunot.jpeg';

export default function Match_unit({ animation }) {
  const [mode, setMode] = useState();
  useEffect(() => {
    setMode('unit');
  }, []);
  return (
    <>
      {mode === 'unit' && <div className="match-unit" style={animation}>
        <div>
                <div className='match-info-wrapper' onClick={() => setMode('messages')}>
                    <div className="match-profile-picture">
                        <img src={Prunot} alt="profile-picture"/>
                    </div>
                    <div className='match-not-image'>
                        <h3 className="match-name">Prunot</h3>
                        <p className="match-message-preview">
                            Un bon gros fils de pute comme on les aime.
                            Tu veux tamtam?
                        </p>
                    </div>
                </div>
            </div>
      </div>}
      {mode === 'messages' && <Match_unit_messages animation={animation} setMode={setMode}/>}
    </>
  );
}
