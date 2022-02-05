import React, { useState, useEffect } from 'react';
import Messages_app from './Messages_app';

export default function Card({ mode }) {
  const animation = { animation: 'inAnimation 250ms ease-in' };

  return (
    <div className="card">
      {mode === 'card' && (
        <div className="card-body" style={animation}>
          <img
            src={require('./images/prunot.jpeg')}
            alt="image"
            className="card-picture"
          />
          <div className="card-header">
            <h3 className="card-title">Prunot</h3>
            <h3 className="card-age">39</h3>
          </div>
          <div className="card-footer">
            <p className="card-description">
              Un bon gros fils de pute comme on les aime. Tu veux tamtam ?
            </p>
          </div>
        </div>
      )}
      {mode === 'message' && <Messages_app animation={animation} />}
    </div>
  );
}
