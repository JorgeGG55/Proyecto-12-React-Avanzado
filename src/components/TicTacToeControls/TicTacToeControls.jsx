import React from 'react';
import resetGame from '../TicTacToeReset/TicTacToeReset';

const TicTacToeControls = ({ gameMessage, dispatch }) => {
  return (
    <div className="tictacResetButton">
      {gameMessage && <div className="gameMessage">{gameMessage}</div>}
      {gameMessage && (
        <button className="resetButton" onClick={() => resetGame(dispatch)}>
          Reset Game
        </button>
      )}
    </div>
  );
};

export default TicTacToeControls;
