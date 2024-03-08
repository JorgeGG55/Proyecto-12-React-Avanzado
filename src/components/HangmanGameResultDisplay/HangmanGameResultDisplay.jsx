import React from 'react';

const GameResultDisplay = ({ gameResult }) => (
  <div>
    <p className={gameResult.includes('won') ? 'resultGameGreen' : 'resultGameRed'}>{gameResult}</p>
  </div>
);

export default GameResultDisplay;
