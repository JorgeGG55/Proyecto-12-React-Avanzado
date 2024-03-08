import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = ({ isMenuOpen, toggleMenu, handleGameSelection }) => {
  return (
    <header>
      <div className={`sidenav ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <Navbar isMobile toggleMenu={toggleMenu} handleGameSelection={handleGameSelection} />
      </div>
      <h1>GamesHub</h1>
      <Navbar toggleMenu={toggleMenu} handleGameSelection={handleGameSelection} />
    </header>
  );
};

export default Header;
