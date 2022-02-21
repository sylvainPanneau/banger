import React, { useState } from 'react';
import './MessageInput.css';
import classNames from 'classnames';
import { supabase } from './setupSupabase';

export default function MessageInput({
  setMessages,
  messages
}: {
  setMessages: Function;
  messages: Array<any>;
}) {
  const [inputValue, setInputValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const inputClassNames = classNames({
    'messages-input': true,
    'messages-input-focused': inputFocused,
    'messages-input-blurred': !inputFocused,
  });

  const resetInputValue = () => setInputValue('');

  function handleButton() {
    setMessages((prevMessages: any) => [
      ...prevMessages,
      {
        origin: supabase.auth.user()?.id,
        destination: messages[0].destination,
        message: inputValue
      },
    ]);
    resetInputValue();
  }

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === 'Enter') {
      handleButton();
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
      <button onClick={handleButton} className="button-send">
        Send
      </button>
    </div>
  );
}
