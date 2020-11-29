import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { restartGame } from "./../actions/index";
import { connect } from "react-redux";
import "./../styles/components/Success.css";

const Success = props => {
  const { width, height } = useWindowSize();
  return (
    <div className="success">
      <Confetti width={width} height={height} />
      {`Correct guess! It took ${props.guesses.length} tries.`}
      <div>
        <button className="restart-btn" onClick={() => props.restartGame()}>{`play again`}</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  debugger;
  return {
    guesses: state.numberGuesses.guesses || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    restartGame: () => {
      dispatch(restartGame());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Success);
