import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const TicTacToe = lazy(() => import('./pages/TicTacToePage.jsx'));
const Hangman = lazy(() => import('./pages/HangmanPage.jsx'));
const Sudoku = lazy(() => import('./pages/SudokuPage.jsx'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/tictactoe"
            element={
              <React.Suspense fallback={<h2>Cargando juego...</h2>}>
                <TicTacToe />
              </React.Suspense>
            }
          />
          <Route
            path="/hangman"
            element={
              <React.Suspense fallback={<h2>Cargando juego...</h2>}>
                <Hangman />
              </React.Suspense>
            }
          />
          <Route
            path="/sudoku"
            element={
              <React.Suspense fallback={<h2>Cargando juego...</h2>}>
                <Sudoku />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
