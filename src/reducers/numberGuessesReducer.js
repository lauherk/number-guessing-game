const initialState = {
  guess: undefined,
  guesses: [],
  numberToGuess: undefined,
  correctGuess: undefined
};

const numberGuesses = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_GUESS":
      debugger;
      return { ...state, guess: action.data };
    case "ADD_GUESS_TO_GUESSES_LIST":
      return { ...state, guesses: [...state.guesses, action.data] };
    case "GAME_START":
      return { ...state, numberToGuess: action.data };
    case "GAME_RESTART":
      return { ...state, guess: undefined, guesses: [], numberToGuess: undefined, correctGuess: undefined };
    case "CHECK_GUESS":
      return { ...state, correctGuess: action.data };
    case "HIGHER_OR_LOWER":
      return { ...state, nextGuessHint: action.data };
    default:
      return state;
  }
};

export default numberGuesses;
