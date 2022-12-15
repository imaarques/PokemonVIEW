import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokemon from "./components/Pokemon/Pokemon";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pokemons/:name" element={<Pokemon />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
