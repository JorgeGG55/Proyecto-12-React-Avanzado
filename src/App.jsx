import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [gameSelected, setGameSelected] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleGameSelection = () => {
    setGameSelected(true);
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
            <NavLink
              className="NavLink tictactoe"
              to="tictactoe"
              onClick={() => {
                toggleMenu();
                handleGameSelection();
              }}
            ></NavLink>
            <NavLink
              className="NavLink hangman"
              to="hangman"
              onClick={() => {
                toggleMenu();
                handleGameSelection();
              }}
            ></NavLink>
            <NavLink
              className="NavLink sudoku"
              to="sudoku"
              onClick={() => {
                toggleMenu();
                handleGameSelection();
              }}
            ></NavLink>
          </nav>
        </div>
        <h1>GamesHub</h1>
      </header>
      <nav className="desktopNav">
        <NavLink
          className="NavLink tictactoe"
          to="tictactoe"
          onClick={handleGameSelection}
        ></NavLink>
        <NavLink className="NavLink hangman" to="hangman" onClick={handleGameSelection}></NavLink>
        <NavLink className="NavLink sudoku" to="sudoku" onClick={handleGameSelection}></NavLink>
      </nav>
      <main>
        <div className="firstContainer">
          {!gameSelected && (
            <>
              <h2>Bienvenido a GamesHub</h2>
              <p>Seleccione un juego en el menú para comenzar</p>
            </>
          )}
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
