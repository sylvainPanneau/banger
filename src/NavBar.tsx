import React from 'react';
import Heart from './images/svg/heart-regular.svg?component';
import Delete from './images/svg/times-solid.svg?component';

export default function NavBar() {
  return (
    <div className="navbar">
      <Delete className="nav-bar-delete" />
      <Heart className="nav-bar-heart" />
    </div>
  );
}
