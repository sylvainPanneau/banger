// This component is used to represent one match in the match list.
// It serves as a preview of the messages between the two users.

import React from 'react';
import Match_unit_messages from './Match_unit_messages';
import Prunot from './images/prunot.jpeg';

export default function Match_unit() {
    return <>
        <div className="match-unit">
            {/* <div>
                <div className='match-info-wrapper'>
                    <div className="match-profile-picture">
                        <img src={Prunot} alt="profile-picture" />
                    </div>
                    <div className='match-not-image'>
                        <h3 className="match-name">Prunot</h3>
                        <p className="match-message-preview">
                            Un bon gros fils de pute comme on les aime.
                            Tu veux tamtam?
                        </p>
                    </div>
                </div>
            </div> */}
        </div>
        <Match_unit_messages/>
    </>;
}
