import React from "react";
import { connect } from "react-redux";
import { startGame } from "../../actions/index";

import "./../../styles/components/buttons/StartGame.css";

const StartGame = props => {
  return (
    <div className="start-btn-container">
      <button className="start-game" onClick={e => props.onClick(e)}>
        {`start game`}
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: e => {
      dispatch(startGame(e));
    }
  };
};

export default connect(null, mapDispatchToProps)(StartGame);
