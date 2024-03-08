import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const TicTacToeGame = lazy(() => import('./components/TicTacToeGame/TicTacToeGame.jsx'));
const HangmanGame = lazy(() => import('./components/HangmanGame/HangmanGame.jsx'));
const SudokuGame = lazy(() => import('./components/SudokuGame/SudokuGame.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/tictactoe"
            element={
              <React.Suspense fallback={<h2>Cargando juego...</h2>}>
                <TicTacToeGame />
              </React.Suspense>
            }
          />
          <Route
            path="/hangman"
            element={
              <React.Suspense fallback={<h2>Cargando juego...</h2>}>
                <HangmanGame />
              </React.Suspense>
            }
          />
          <Route
            path="/sudoku"
            element={
              <React.Suspense fallback={<h2>Cargando juego...</h2>}>
                <SudokuGame />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
