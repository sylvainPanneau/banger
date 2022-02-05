import React from 'react';
import { ReactComponent as Heart } from './images/svg/heart-regular.svg';
import { ReactComponent as Delete } from './images/svg/times-solid.svg';

export default function NavBar() {
  return (
    <div className="navbar">
      <Delete className="nav-bar-delete" />
      <Heart className="nav-bar-heart" />
    </div>
  );
}
