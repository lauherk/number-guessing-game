import React from "react";
import { connect } from "react-redux";

import "./../styles/components/GuessList.css";
const GuessList = props => {
  if (props.guesses.length > 0) {
    return (
      <div className="guess-list-container">
        <div className="past-guesses">{`past guesses:`}</div>
        {props.guesses.map((guess, index) => (
          <div key={`${index}:${guess}`} className="guess-list-item">{`guess ${index + 1}: ${guess}`}</div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  debugger;
  return {
    guesses: state.numberGuesses.guesses || []
  };
};

export default connect(mapStateToProps)(GuessList);
