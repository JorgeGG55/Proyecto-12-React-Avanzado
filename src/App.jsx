import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className={`sidenav ${isMenuOpen ? 'open' : ''}`}>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <nav>
            <NavLink className="NavLink tictactoe" to="tictactoe" onClick={toggleMenu}></NavLink>
            <NavLink className="NavLink hangman" to="hangman" onClick={toggleMenu}></NavLink>
            <NavLink className="NavLink sudoku" to="sudoku" onClick={toggleMenu}></NavLink>
          </nav>
        </div>
        <h1>GamesHub</h1>
      </header>
      <nav className="desktopNav">
        <NavLink className="NavLink tictactoe" to="tictactoe"></NavLink>
        <NavLink className="NavLink hangman" to="hangman"></NavLink>
        <NavLink className="NavLink sudoku" to="sudoku"></NavLink>
      </nav>
      <main>
        <div className="firstContainer">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
