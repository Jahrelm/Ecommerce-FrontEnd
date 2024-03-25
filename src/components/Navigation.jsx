
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/products"></Link>
        </li>
  
      </ul>
    </nav>
  );
}

export default Navigation;
