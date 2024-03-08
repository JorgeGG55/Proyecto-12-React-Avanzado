import React from 'react';
import useGameReducer from '../../hooks/useTicTacToeGame';
import TicTacToeHeader from '../TicTacToeHeader/TicTacToeHeader';
import TicTacToeBoard from '../TicTacToeBoard/TicTacToeBoard';
import TicTacToeControls from '../TicTacToeControls/TicTacToeControls';

const TicTacToeGame = () => {
  const { state, dispatch } = useGameReducer();
  const { isStarted, currentPlayer, board, gameMessage } = state;

  const toggleGame = () => {
    dispatch({ type: 'TOGGLE_GAME' });
  };

  return (
    <>
      <TicTacToeHeader isStarted={isStarted} toggleGame={toggleGame} />
      {isStarted && <div>{`${currentPlayer}'s turn`}</div>}
      <div className="tictacContainer">
        <TicTacToeBoard
          board={board}
          isStarted={isStarted}
          currentPlayer={currentPlayer}
          gameMessage={gameMessage}
          dispatch={dispatch}
        />
        <TicTacToeControls gameMessage={gameMessage} dispatch={dispatch} />
      </div>
    </>
  );
};

export default TicTacToeGame;
