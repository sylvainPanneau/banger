import React, { useState, useEffect } from 'react';
import { useRef } from 'react';

const messagesSample = [
  {
    id: 1,
    sender: 'Prunot',
    text: 'Un bon gros fils de pute comme on les aime. Tu veux tamtam?',
    date: '2020-01-01',
  },
  {
    id: 2,
    sender: 'Yves',
    text: "Oui, j'ai pas vu deux fois",
    date: '2020-01-01',
  },
  {
    id: 3,
    sender: 'Prunot',
    text: 'Un bon gros fils de pute comme on les aime. Tu veux tamtam?',
    date: '2020-01-01',
  },
  {
    id: 4,
    sender: 'Yves',
    text: "Oui, j'ai pas vu deux fois",
    date: '2020-01-01',
  },
  {
    id: 5,
    sender: 'Yves',
    text: "Oui, j'ai pas vu deux fois",
    date: '2020-01-01',
  },
  {
    id: 6,
    sender: 'Yves',
    text: "Oui, j'ai pas vu deux fois",
    date: '2020-01-01',
  },
  {
    id: 7,
    sender: 'Yves',
    text: "Oui, j'ai pas vu deux fois",
    date: '2020-01-01',
  },
  {
    id: 8,
    sender: 'Yves',
    text: "Oui, j'ai pas vu deux fois",
    date: '2020-01-01',
  },
  {
    id: 9,
    sender: 'Yves',
    text: "Oui, j'ai pas vu deux fois",
    date: '2020-01-01',
  },
  {
    id: 10,
    sender: 'Yves',
    text: "Oui, j'ai pas vu deux fois",
    date: '2020-01-01',
  },
  {
    id: 11,
    sender: 'Yves',
    text: "Oui, j'ai pas vu deux fois",
    date: '2020-01-01',
  },
];

export default function MessagesBody() {
  const [messages, setMessages] = useState<typeof messagesSample>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(messagesSample);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current?.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="messages-body" ref={containerRef}>
      {messages.map(message => {
        return message.sender === 'Yves' ? (
          <div key={message.id} className="message-wrapper-me">
            <div className="message-me">
              <p className="message-text">{message.text}</p>
            </div>
          </div>
        ) : (
          <div key={message.id} className="message-wrapper-other">
            <div className="message-other">
              <p className="message-text">{message.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
