import { combineReducers } from "redux";
import numberGuesses from "./numberGuessesReducer";

const rootReducer = combineReducers({
  numberGuesses
});

export default rootReducer;
