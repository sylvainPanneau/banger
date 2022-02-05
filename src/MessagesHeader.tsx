import React from 'react';
import Back from './images/svg/chevron-left-solid.svg?component';
import DamnLookinFineProfilePic from './images/prunot.jpeg';

type MessageHeaderProps = {
  setMode: (v: string) => void;
};

export default function MessageHeader({ setMode }: MessageHeaderProps) {
  return (
    <div className="messages-header">
      <Back className="messages-header-back" onClick={() => setMode('unit')} />
      <img
        src={DamnLookinFineProfilePic}
        alt="profile-picture"
        className="messages-profile-picture"
      />
    </div>
  );
}
