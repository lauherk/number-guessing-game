import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setGuess, addGuessToList, guessHigherOrLower, checkGuess } from "../actions/index";

import "./../styles/components/GuessInputField.css";

const GuessInput = props => {
  return (
    <div className="guess-input-container">
      <div className="guess-input-instructions">{`Pick a number between 1 and 100:`}</div>
      <input className="guess-input" type="number" value={props.guess} onChange={e => props.onChange(e)} />
      <button className="guess-submit" onClick={() => props.checkGuess(props.numberToGuess, props.guess)}>
        {`guess!`}
      </button>
    </div>
  );
};

GuessInput.propTypes = {
  guess: PropTypes.string,
  numberToGuess: PropTypes.number
};

const mapStateToProps = state => {
  debugger;
  return {
    guess: state.numberGuesses.guess || "",
    numberToGuess: state.numberGuesses.numberToGuess || null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => {
      dispatch(setGuess(e.target.value));
    },
    checkGuess: (numberToGuess, guess) => {
      dispatch(addGuessToList(guess));
      dispatch(checkGuess(numberToGuess, guess));
      dispatch(guessHigherOrLower(numberToGuess, guess));
      dispatch(setGuess(null));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuessInput);
