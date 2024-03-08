import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [gameSelected, setGameSelected] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleGameSelection = () => {
    setGameSelected(true);
  };

  const shouldShowText = !gameSelected || location.pathname === '/';

  useEffect(() => {
    const gameSelectedFromStorage = localStorage.getItem('gameSelected');
    if (gameSelectedFromStorage) {
      setGameSelected(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gameSelected', gameSelected);
  }, [gameSelected]);

  return (
    <>
      <Header
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        handleGameSelection={handleGameSelection}
      />
      <main>
        <div className="firstContainer">
          {shouldShowText && (
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
