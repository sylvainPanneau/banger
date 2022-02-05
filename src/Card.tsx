import React, { useState, useEffect } from 'react';
import MessagesApp from './MessagesApp';

import DamnLookinFineProfilePic from './images/prunot.jpeg';

type CardProps = {
  mode: string;
};

export default function Card({ mode }: CardProps) {
  const animation = { animation: 'inAnimation 250ms ease-in' };

  return (
    <div className="card">
      {mode === 'card' && (
        <div className="card-body" style={animation}>
          <img
            src={DamnLookinFineProfilePic}
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
      {mode === 'message' && <MessagesApp animation={animation} />}
    </div>
  );
}
