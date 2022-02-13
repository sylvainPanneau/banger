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
          <div className="card-info">
            <div className="card-info-main">
              <div className="card-name">Prunot</div>
              <div className="card-age">52</div>
            </div>
            <div className="card-desc">Un bon gars finalement, je l'ai un peu vite jugé...</div>
          </div>
        </div>
      )}
      {mode === 'message' && <MessagesApp animation={animation} />}
    </div>
  );
}
