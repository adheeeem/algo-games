import "./App.css";
import TicTacToe from "./games/TicTacToe";
import Navbar from "./components/Navbar";
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gameslist from "./components/Games";
import Labyrinth from "./games/Labyrinth";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
          <Routes>
            <Route path="/games/tictactoe" element={<TicTacToe />} />
            <Route path="/games" element={<Gameslist />} />
            <Route path="/games/labyrinth" element={<Labyrinth />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
