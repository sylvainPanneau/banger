import React, { useEffect, useState } from 'react';
import './MessageInput.css';
import classNames from 'classnames';
import { supabase } from './setupSupabase';
import { v4 as uuidv4 } from 'uuid';

export default function MessageInput({
  setMessages,
  messages,
  matchId,
}: {
  setMessages: Function;
  messages: Array<any>;
  matchId: string;
}) {
  const [inputValue, setInputValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const inputClassNames = classNames({
    'messages-input': true,
    'messages-input-focused': inputFocused,
    'messages-input-blurred': !inputFocused,
  });

  const resetInputValue = () => setInputValue('');

  async function handleButton() {
    const id = uuidv4();
    if (inputValue.length > 0) {
      setMessages([
        ...messages,
        {
          id: id,
          origin: supabase.auth.user()?.id as string,
          destination: matchId,
          message: inputValue,
        },
      ])
    }
    if (inputValue.length > 0) {
      const { data, error } = await supabase.from('interaction').insert([
        {
          id: id,
          origin: supabase.auth.user()?.id as string,
          destination: matchId,
          message: inputValue,
        },
      ]);
      resetInputValue();
    }

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
