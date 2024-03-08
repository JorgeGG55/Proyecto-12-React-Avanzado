import React from 'react';
import { useHangmanGame } from '../../hooks/useHangmanGame';
import HangmanHeader from '../HangmanHeader/HangmanHeader';
import WordDisplay from '../HangmanWordDisplay/HangmanWordDisplay';
import AttemptsDisplay from '../HangmanAttemptsDisplay/HangmanAttemptsDisplay';
import GameResultDisplay from '../HangmanGameResultDisplay/HangmanGameResultDisplay';
import LetterButtons from '../HangmanLetterButtons/HangmanLetterButtons';

const HangmanGame = () => {
  const {
    gameStarted,
    displayedWord,
    usedLetters,
    selectedWord,
    remainingAttempts,
    gameResult,
    handleLetterClick,
    handleGameRestart
  } = useHangmanGame();

  return (
    <>
      <HangmanHeader onGameRestart={handleGameRestart} />
      {gameStarted && (
        <>
          <WordDisplay word={displayedWord} />
          <AttemptsDisplay
            selectedWord={selectedWord}
            usedLetters={usedLetters}
            remainingAttempts={remainingAttempts}
          />
          <GameResultDisplay gameResult={gameResult} />
          <LetterButtons
            usedLetters={usedLetters}
            onClick={handleLetterClick}
            gameResult={gameResult}
          />
        </>
      )}
    </>
  );
};

export default HangmanGame;
