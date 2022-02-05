import React from 'react';
import { ReactComponent as Back } from './images/svg/chevron-left-solid.svg';

export default function Messages_Header({setMode}) {
  return (
    <div className="messages-header">
      <Back 
        className="messages-header-back"
        onClick={() => setMode('unit')}
      />
      <img
        src={require('./images/prunot.jpeg')}
        alt="profile-picture"
        className="messages-profile-picture"
      />
    </div>
  );
}
