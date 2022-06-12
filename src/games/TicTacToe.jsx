import React, { Component, useState } from "react";
import Toe from "../components/Toe";

function TicTacToe() {
  const [ai, setAi] = useState("");
  const [player, setPlayer] = useState("");
  const [chose, setChose] = useState(false);

  function handleOption(option) {
    if (option == 'X') {
        setPlayer('X');
        setAi('O');
    } else {
        setPlayer('O');
        setAi('X');
    }
    setChose(true);
  }
  function handleRetry() {
    setChose(false);
  }
  return (
    <div className="ticContent">
        <h1>Tic Tac Toe (Unbeatable)</h1>
      {!chose && <div className="option_btns">
        <button onClick={() => handleOption("X")}>X</button>
        <button onClick={() => handleOption("O")}>O</button>
      </div>}
      {chose && <Toe ai={ai} player={player} handleRetry={handleRetry}/>}
    </div>
  );
}

export default TicTacToe;
