import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isMobile, toggleMenu, handleGameSelection }) => {
  const handleNavLinkClick = () => {
    toggleMenu();
    handleGameSelection();
  };

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : 'desktop'}`}>
      <NavLink className="navLink tictactoe" to="tictactoe" onClick={handleNavLinkClick}></NavLink>
      <NavLink className="navLink hangman" to="hangman" onClick={handleNavLinkClick}></NavLink>
      <NavLink className="navLink sudoku" to="sudoku" onClick={handleNavLinkClick}></NavLink>
    </nav>
  );
};

export default Navbar;
