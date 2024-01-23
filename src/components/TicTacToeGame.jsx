import React, { useState, useEffect } from 'react';

const TicTacToeGame = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);
  const [gameMessage, setGameMessage] = useState('');

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === currentPlayer &&
        board[i][1] === currentPlayer &&
        board[i][2] === currentPlayer
      ) {
        return true;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === currentPlayer &&
        board[1][i] === currentPlayer &&
        board[2][i] === currentPlayer
      ) {
        return true;
      }
    }

    if (
      (board[0][0] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][2] === currentPlayer) ||
      (board[0][2] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][0] === currentPlayer)
    ) {
      return true;
    }

    return false;
  };

  const checkDraw = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === null) {
          return false;
        }
      }
    }
    return true;
  };

  const handleCellClick = (row, col) => {
    if (!isStarted || board[row][col] !== null) {
      return;
    }

    const newBoard = [...board];
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner()) {
      setGameMessage(`¡Player ${currentPlayer} won!`);
    } else if (checkDraw()) {
      setGameMessage('¡Draw!');
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setIsStarted(false);
    setCurrentPlayer('');
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
    setGameMessage('');
  };

  useEffect(() => {
    if (isStarted && !currentPlayer) {
      const initialPlayer = Math.random() < 0.5 ? 'X' : 'O';
      setCurrentPlayer(initialPlayer);
    }

    if (isStarted) {
      if (checkWinner()) {
        setGameMessage(`¡Player ${currentPlayer} won!`);
      } else if (checkDraw()) {
        setGameMessage('¡Draw!');
      }
    }
  }, [board, currentPlayer, isStarted]);

  return (
    <>
      <h2>Tic Tac Toe</h2>
      <button className="startGameButton" onClick={() => setIsStarted(!isStarted)}>
        {isStarted ? 'End Game' : 'Start Game'}
      </button>
      {isStarted && <div>{`${currentPlayer}'s turn`}</div>}
      <div className="tictacContainer">
        <div className="tictacBoard">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => (
                <button
                  className="tictactorButtons"
                  key={colIndex}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {cell}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="tictacResetButton">
          {gameMessage && <div className="gameMessage">{gameMessage}</div>}
          {gameMessage && (
            <button className="resetButton" onClick={resetGame}>
              Reset Game
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TicTacToeGame;
