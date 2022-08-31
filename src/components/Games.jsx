import React from "react";
import { Link } from "react-router-dom";
import "../css/games.css";

const Games = () => {
  return (
    <div className="games">
      <div>
        <Link to="tictactoe">TicTacToe</Link>
      </div>
      <div>
        <Link to="labyrinth">Labyrinth</Link>
      </div>
    </div>
  );
};

export default Games;
