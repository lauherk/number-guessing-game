export const setGuess = guess => {
  return {
    type: "SET_CURRENT_GUESS",
    data: guess
  };
};

export const addGuessToList = guess => ({
  type: "ADD_GUESS_TO_GUESSES_LIST",
  data: guess
});

export const checkGuess = (numberToGuess, guess) => {
  return {
    type: "CHECK_GUESS",
    data: numberToGuess === Number(guess)
  };
};

export const guessHigherOrLower = (numberToGuess, guess) => {
  return {
    type: "HIGHER_OR_LOWER",
    data: numberToGuess > guess ? "higher" : "lower"
  };
};

export const startGame = () => {
  const randomNumber = Math.round(Math.random() * 100);
  return {
    type: "GAME_START",
    data: randomNumber
  };
};

export const restartGame = () => {
  return {
    type: "GAME_RESTART",
    data: null
  };
};
