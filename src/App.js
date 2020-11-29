import React from "react";
import { connect } from "react-redux";
import Header from "./components/layout/Header";
import StartGame from "./components/buttons/StartGame";
import GuessGame from "./components/GuessGame";
import GuessList from "./components/GuessList";
import TryAgain from "./components/TryAgain";

import "./styles/App.css";

const App = props => {
  return (
    <div className="App">
      <Header />
      {props.correctGuess === false && <TryAgain />}
      <div className="game-content">
        {props.numberToGuess === null ? <StartGame /> : <GuessGame />}
        {<GuessList />}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numberToGuess: state.numberGuesses.numberToGuess || null,
    correctGuess: state.numberGuesses.correctGuess
  };
};

export default connect(mapStateToProps, null)(App);
