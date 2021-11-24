import React from 'react';
import './App/App.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div >
      <nav className='nav-container'>
  
        <ul className="nav-links">
        <Link to='/'>
        <li>HOME</li>
        </Link>
        <Link to='/meeting'>
        <li>MEETING</li>
        </Link>
        <Link to='/about'>
        <li>ABOUT</li>
        </Link>
        </ul>
      </nav>
    </div>
    
  
  );
}



export default Nav;