import React, { useState, useEffect } from 'react';

export default function Messages_Body() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
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
        id: 4,
        sender : 'Yves',
        text: 'Oui, j\'ai pas vu deux fois',
        date: '2020-01-01',
      },
      {
        id: 4,
        sender : 'Yves',
        text: 'Oui, j\'ai pas vu deux fois',
        date: '2020-01-01',
      },
      {
        id: 4,
        sender : 'Yves',
        text: 'Oui, j\'ai pas vu deux fois',
        date: '2020-01-01',
      },
      {
        id: 4,
        sender : 'Yves',
        text: 'Oui, j\'ai pas vu deux fois',
        date: '2020-01-01',
      },
      {
        id: 4,
        sender : 'Yves',
        text: 'Oui, j\'ai pas vu deux fois',
        date: '2020-01-01',
      },
      {
        id: 4,
        sender : 'Yves',
        text: 'Oui, j\'ai pas vu deux fois',
        date: '2020-01-01',
      },
      {
        id: 4,
        sender : 'Yves',
        text: 'Oui, j\'ai pas vu deux fois',
        date: '2020-01-01',
      },
    ]);
  }, []);

  useEffect(() => {
    // scroll to bottom
    const messagesContainer = document.querySelector('.messages-body');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="messages-body">
      {/* map through messages */}
      {messages.map(message => {
        return message.sender === 'Yves' ? (
          <div className="message-wrapper-me">
            <div className="message-me">
              <p className="message-text">{message.text}</p>
            </div>
          </div>
        ) : (
          <div className="message-wrapper-other">
            <div className="message-other">
              <p className="message-text">{message.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
