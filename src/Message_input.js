import React from 'react';

export default function Message_input() {
  function handleInputFocus() {
    // add border style to messages-input class
    document.querySelector('.messages-input').style.border =
      '1px solid rgb(230, 115, 115)';
  }

  function handleInputBlur() {
    // remove border style from messages-input class
    document.querySelector('.messages-input').style.border =
      '1px solid rgb(230, 230, 230)';
    console.log('blur');
  }

  return (
    <div className="messages-input">
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type="text"
        placeholder="Type a message..."
      />
      <button className="button-send">Send</button>
    </div>
  );
}
