import React, { useState } from 'react';
import './MessageInput.css';
import classNames from 'classnames';

export default function MessageInput() {
  const [inputValue, setInputValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const inputClassNames = classNames({
    'messages-input': true,
    'messages-input-focused': inputFocused,
    'messages-input-blurred': !inputFocused,
  });

  const resetInputValue = () => setInputValue('');

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      resetInputValue();
    }
  };

  return (
    <div className={inputClassNames}>
      <input
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        type="text"
        placeholder="Type a message..."
        value={inputValue}
        onKeyPress={handleKeyPress}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={resetInputValue} className="button-send">
        Send
      </button>
    </div>
  );
}
