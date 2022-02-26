import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { supabase } from './setupSupabase';
import { v4 as uuidv4 } from 'uuid';
import { ProgressBar } from 'react-bootstrap';
import MessagesLoading from './MessagesLoading';

export default function MessagesBody({ messages }: { messages: Array<any> }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("local storage : ", localStorage.getItem('messages'));
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current?.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {localStorage.getItem('messages') === null ? (<MessagesLoading />) :
        (<div className="messages-body" ref={containerRef}>
          {messages.map(message => {
            return message.origin === supabase.auth.user()?.id ? (
              <div key={uuidv4()} className="message-wrapper-me">
                <div className="message-me">
                  <p className="message-text">{message.message}</p>
                </div>
              </div>
            ) : (
              <div key={uuidv4()} className="message-wrapper-other">
                <div className="message-other">
                  <p className="message-text">{message.message}</p>
                </div>
              </div>
            );
          })}
        </div>)}
    </>
  );
}
