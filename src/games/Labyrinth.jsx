import React from "react";
import { useState } from "react";
import Lab from "../components/Lab";

function Labyrinth() {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);

  return (
    
      <Lab rows={rows} cols={cols} />
  );
}

export default Labyrinth;
