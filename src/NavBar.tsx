import React from 'react';
import Heart from './images/svg/done_outline_black_24dp.svg?component';
import Delete from './images/svg/delete_black_24dp.svg?component';

export default function NavBar() {
  return (
    <div className="navbar">
      <Delete className="nav-bar-delete" />
      <Heart className="nav-bar-heart" />
    </div>
  );
}
