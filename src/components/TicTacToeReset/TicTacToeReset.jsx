const resetGame = (dispatch) => {
  const initialPlayer = Math.random() < 0.5 ? 'X' : 'O';
  dispatch({ type: 'RESET_GAME', initialPlayer });
};

export default resetGame;
