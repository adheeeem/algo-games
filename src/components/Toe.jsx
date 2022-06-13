import React, { Component } from "react";
import "../css/tic.css";

class Toe extends Component {
  state = {
    board: [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ],
    bestMove: {},
    player: this.props.player,
    ai: this.props.ai,
    finalScore: "",
    endGame: undefined,
    tie: undefined,
    thinking: false,
  };
  // Function to check for the winner
  isWin(board) {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
        if (board[i][0] == this.state.ai) return 1;
        else if (board[i][0] == this.state.player) return -1;
      }
      if (board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
        if (board[0][i] == this.state.ai) return 1;
        else if (board[0][i] == this.state.player) return -1;
      }
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
      if (board[0][0] == this.state.ai) return 1;
      else if (board[0][0] == this.state.player) return -1;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
      if (board[0][2] == this.state.ai) return 1;
      else if (board[0][2] == this.state.player) return -1;
    }
  }

  // Returns true if is there any empty slot
  isFree(board) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === " ") return true;
      }
    }
    return false;
  }

  // Minimax algorithm
  minimax(board, isMax) {
    const score = this.isWin(board);
    // Check if there any winner
    if (score === 1 || score === -1) return score;
    if (!this.isFree(board)) return 0;

    if (isMax) {
      let best = -100;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === " ") {
            board[i][j] = this.state.ai;
            let result = this.minimax(board, false);
            board[i][j] = " ";
            best = Math.max(best, result);
          }
        }
      }
      return best;
    } else {
      let best = 100;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] == " ") {
            board[i][j] = this.state.player;
            let result = this.minimax(board, true);
            board[i][j] = " ";
            best = Math.min(best, result);
          }
        }
      }
      return best;
    }
  }
  bestMoveFinder(board) {
    let finalScore = -100;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == " ") {
          board[i][j] = this.state.ai;
          let score = this.minimax(board, false);
          board[i][j] = " ";
          if (score > finalScore) {
            finalScore = score;
            this.setState({ bestMove: { i, j } });
            this.setState({ finalScore });
          }
        }
      }
    }
  }

  aiMove(board) {
    if (!this.state.endGame && !this.state.tie) {
      this.bestMoveFinder(board);
      setTimeout(() => {
        console.log(this.state.bestMove);
        console.log(this.state.finalScore);
        board[this.state.bestMove.i][this.state.bestMove.j] = this.state.ai;
        this.setState({ board });
        let score = this.isWin(board);
        if (score) {
          if (score == -1) this.setState({ endGame: this.state.player });
          if (score == 1) this.setState({ endGame: this.state.ai });
        }
        if (!this.isFree(this.state.board)) this.setState({ tie: "Tie" });
        this.setState({ thinking: false });
      }, 500);
    }
  }

  playerMove = (i, j) => {
    if (!this.state.endGame && !this.state.tie && !this.state.thinking) {
      let board = [...this.state.board];
      if (board[i][j] == " ") {
        board[i][j] = this.state.player;
        this.setState({ board });
        this.setState({ thinking: true });
        console.log("Thinking", this.state.thinking);
        let score = this.isWin(this.state.board);
        if (score) {
          if (score == -1) this.setState({ endGame: "O" });
          if (score == 1) this.setState({ endGame: "X" });
        } else this.aiMove(this.state.board);
      }
    }
    if (!this.isFree(this.state.board)) this.setState({ tie: "Tie" });
  };
  isRetry() {
    if (this.state.endGame || this.state.tie) return true;
    return false;
  }
  render() {
    return (
      <div className="ticboard">
        <div className="ticrow">
          <div
            className="cell border bottom"
            onClick={() => this.playerMove(0, 0)}
          >
            {this.state.board[0][0]}
          </div>
          <div
            className="cell border bottom"
            onClick={() => this.playerMove(0, 1)}
          >
            {this.state.board[0][1]}
          </div>
          <div className="cell bottom" onClick={() => this.playerMove(0, 2)}>
            {this.state.board[0][2]}
          </div>
        </div>
        <div className="ticrow">
          <div
            className="cell border bottom"
            onClick={() => this.playerMove(1, 0)}
          >
            {this.state.board[1][0]}
          </div>
          <div
            className="cell border bottom"
            onClick={() => this.playerMove(1, 1)}
          >
            {this.state.board[1][1]}
          </div>
          <div className="cell bottom" onClick={() => this.playerMove(1, 2)}>
            {this.state.board[1][2]}
          </div>
        </div>
        <div className="ticrow">
          <div className="cell border" onClick={() => this.playerMove(2, 0)}>
            {this.state.board[2][0]}
          </div>
          <div className="cell border" onClick={() => this.playerMove(2, 1)}>
            {this.state.board[2][1]}
          </div>
          <div className="cell" onClick={() => this.playerMove(2, 2)}>
            {this.state.board[2][2]}
          </div>
        </div>
        {this.isRetry() && (
          <button id="retryBtn" onClick={this.props.handleRetry}><i style={{color: 'white'}} class="ri-repeat-line"></i></button>
        )}
        <br />
        {this.state.endGame && <span id="message">{this.state.endGame} Won!</span>}
        {this.state.tie && <span id="message">Draw!</span>}
      </div>
    );
  }
}

export default Toe;
