import React from "react";
import { useState } from "react";
import "../css/lab.css";

function Lab({ rows, cols }) {
  const [board, setBoard] = useState([...Array(rows * cols).keys()]);
  const [style, setStyle] = useState({
    gridTemplateColumns: Array(cols).fill("1fr").join(" ").toString(),
  });
  const [walls, setWalls] = useState(Array(cols * rows).fill(0));
  const [pborder, setPborder] = useState([0, 0, 0]);
  const [pointa, setPointa] = useState(-1);
  const [pointb, setPointb] = useState(-1);
  const [colors, setColors] = useState({
    0: "white",
    1: "grey",
    2: "rgb(209, 74, 74)",
    3: "rgb(71, 71, 204)",
  });

  const setWall = (e) => {
    let index = e.target.classList[1];

    // Animate on click
    e.target.style.animation = "zoom-in-zoom-out";
    e.target.style.animationDuration = "0.5s";
    setTimeout(() => (e.target.style.animation = ""), 500);

    let y = index % cols;
    let x = Math.floor(index / rows);
    let temp = [...walls];
    if (pborder[2]) {
      if (temp[index] == 1) temp[index] = 0;
      else temp[index] = 1;
    } else if (pborder[0]) {
      temp[pointa] = 0;
      temp[index] = 2;
      setPointa(index);
    } else if (pborder[1]) {
      temp[pointb] = 0;
      temp[index] = 3;
      setPointb(index);
    }
    setWalls(temp);
  };

  const point = (e) => {
    let id = e.target.id;
    if (id == "pointa") setPborder([1, 0, 0]);
    else if (id == "pointb") setPborder([0, 1, 0]);
    else setPborder([0, 0, 1]);
  };

  return (
    <div className="board_parent">
      <div className="lab_board" style={style}>
        {board.map((e) => {
          return (
            <div
              className={`lab_cell ${e}`}
              key={e}
              onClick={setWall}
              style={{ backgroundColor: colors[walls[e]] }}
            ></div>
          );
        })}
      </div>
      <div className="points">
        <div
          id="pointa"
          onClick={point}
          style={{ border: pborder[0] ? "2px solid white" : "None" }}
        >
          A
        </div>
        <div
          id="pointb"
          onClick={point}
          style={{ border: pborder[1] ? "2px solid white" : "None" }}
        >
          B
        </div>
        <div
          id="pointc"
          onClick={point}
          style={{ border: pborder[2] ? "2px solid white" : "None" }}
        >
          W
        </div>
      </div>
    </div>
  );
}

export default Lab;
