import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import MessagesApp from './MessagesApp';

import DamnLookinFineProfilePic from './images/prunot.jpeg';

type CardProps = {
  mode: string;
  matches: Array<any>;
};


export default function Card({
  mode,
  matches,
}: CardProps) {
  const animation = { animation: 'inAnimation 250ms ease-in' };
  const cardData = [
    {
      name: 'Prunot',
      age: '21',
      bio:
        'I am a 21 year old, single, and I am looking for a relationship. I am a very nice person and I love to play video games. I am a very nice person and I love to play video games.',
      image: DamnLookinFineProfilePic,
      id: '1',
    },
    {
      name: 'Yves',
      age: '21',
      bio:
        'I am very handsome.',
      image: DamnLookinFineProfilePic,
      id: '2',
    },
    {
      name: 'Chien',
      age: '19',
      bio:
        'Cute as hell dog.',
      image: DamnLookinFineProfilePic,
      id: '3',
    }
  ];

  useEffect(() => {
    console.log('mode : ', mode);
  }, []);

  return (
    <div className="card">
      {mode === 'card' && (
        <div className="card-body" style={animation}>
          {/* map on cardData */}
          {cardData.map((card) => (
            <>
              <img
                src={card.image}
                alt="image"
                className="card-picture" />
              <div className="card-info">
                <div className="card-info-main">
                  <div className="card-name">{card.name}</div>
                  <div className="card-age">{card.age}</div>
                </div>
                <div className="card-desc">{card.bio}</div>
              </div>
            </>
          ))}
        </div>
      )}

      {mode === 'message' && (
        <MessagesApp
          animation={animation}
          matches={matches}
        />
      )}
    </div>
  );
}
