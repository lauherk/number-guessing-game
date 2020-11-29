import React from "react";
import { connect } from "react-redux";

import "./../styles/components/TryAgain.css";

const TryAgain = props => {
  return (
    <>
      {props.nextGuessHint ? (
        <div className="try-again-text">
          {`incorrect guess, try again but choose a`} <b>{props.nextGuessHint}</b>
          {` value this time`}
        </div>
      ) : (
        `incorrect guess, try again`
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    nextGuessHint: state.numberGuesses.nextGuessHint
  };
};

export default connect(mapStateToProps, null)(TryAgain);
