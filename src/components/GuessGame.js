import React from "react";
import { connect } from "react-redux";
import GuessInput from "./GuessInputField";
import Success from "./Success";

import "./../styles/components/GuessGame.css";

const GuessGameInputs = props => {
  debugger;
  return (
    <div className="game-controls-container">
      {props.correctGuess === undefined || props.correctGuess === false ? <GuessInput /> : <Success />}
    </div>
  );
};

const mapStateToProps = state => {
  debugger;
  return {
    correctGuess: state.numberGuesses.correctGuess
  };
};

export default connect(mapStateToProps, null)(GuessGameInputs);
