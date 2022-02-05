import React, { useState, useEffect } from 'react';
import Messages_Actions from './Messages_Actions';
import Messages_Body from './Messages_Body';
import Messages_Header from './Messages_Header';

export default function Match_unit_messages({setMode, animation}) {
  return (
    <div className="match-unit-messages" style={animation}>
      <Messages_Header setMode={setMode}/>
      <Messages_Body />
      <Messages_Actions/>
    </div>
  );
}
