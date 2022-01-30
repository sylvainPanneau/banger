import React, { useState, useEffect } from 'react';
import Messages_Actions from './Messages_Actions';
import Messages_Body from './Messages_Body';
import Messages_Header from './Messages_Header';

export default function Match_unit_messages() {
  return (
    <div className="match-unit-messages">
      <Messages_Header />
      <Messages_Body />
      <Messages_Actions />
    </div>
  );
}
