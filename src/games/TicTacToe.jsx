import React, { useState } from "react";
import Toe from "../components/Toe";
import "../css/tic.css";

function TicTacToe() {
  const [ai, setAi] = useState("");
  const [player, setPlayer] = useState("");
  const [chose, setChose] = useState(false);

  function handleOption(option) {
    if (option === "X") {
      setPlayer("X");
      setAi("O");
    } else {
      setPlayer("O");
      setAi("X");
    }
    setChose(true);
  }
  function handleRetry() {
    setChose(false);
  }
  return (
    <div className="ticContent">
      <div id="title_div">
        <span id="title">Tic Tac Toe (Unbeatable)</span>
      </div>
      {!chose && (
        <div className="option_btns">
          <h1>Select the Player</h1>
          <button onClick={() => handleOption("X")}>X</button>
          <button onClick={() => handleOption("O")}>O</button>
        </div>
      )}
      {chose && <Toe ai={ai} player={player} handleRetry={handleRetry} />}
    </div>
  );
}

export default TicTacToe;
