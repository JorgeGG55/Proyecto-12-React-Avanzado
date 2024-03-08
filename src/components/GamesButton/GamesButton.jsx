import React from 'react';
import './GamesButton.css';

const GameHeaderButton = ({ buttonText, onClick }) => (
  <button className="startGameButton" onClick={onClick}>
    {buttonText}
  </button>
);

export default GameHeaderButton;
