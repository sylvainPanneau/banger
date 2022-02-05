import React, { useState } from 'react';

export default function Message_input() {
  const [inputValue, setInputValue] = useState('');

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

  function resetInputValue(){
    setInputValue('');
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      resetInputValue();
    }
  };
      

  return (
    <div className="messages-input">
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type="text"
        placeholder="Type a message..."
        value = {inputValue}
        onKeyPress={handleKeyPress}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={resetInputValue} className="button-send">Send</button>
    </div>
  );
}
