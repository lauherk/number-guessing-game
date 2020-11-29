import React from "react";
import { connect } from "react-redux";
import { Ghost } from "react-kawaii";

const Header = props => {
  const mood = props.correctGuess ? "happy" : "sad";
  return (
    <header className="App-header">
      <div className="title">{`The Number Guessing Game`}</div>
      {props.guesses.length === 0 ? (
        <Ghost size={200} mood="excited" color="#E0E4E8" />
      ) : (
        <span style={{ display: "flex" }}>
          <Ghost size={200} mood={mood} color="#E0E4E8" />
        </span>
      )}
    </header>
  );
};

const mapStateToProps = state => {
  debugger;
  return {
    correctGuess: state.numberGuesses.correctGuess || null,
    guesses: state.numberGuesses.guesses || []
  };
};

export default connect(mapStateToProps, null)(Header);
