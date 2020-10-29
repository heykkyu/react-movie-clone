import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navigation