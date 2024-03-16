import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PokemonInfo from "./PokemonInfo";

function App() {
  const abilitiesList = [
    "Lightning Rod",
    "Growl",
    "Spark",
    "Slam",
    "Tail Whip",
  ];

  return (
    <Router>
        <nav>
          <Link to="/best-pokemon">Best Pokemon</Link>
        </nav>
        <nav>
          <Link to="/caught-pokemon">Caught Pokemon</Link>
        </nav>
        <nav>
          <Link to="/pokemon/Pikachu">Pikachu</Link>
        </nav>
        <nav>
          <Link to="/pokemon/Bulbasaur">Bulbasaur</Link>
        </nav>
        <nav>
          <Link to="/pokemon/Onix">Onix</Link>
        </nav>
      <Logo appName={"Areeb's Pokedex"} LogWhenClicked={LogWhenClicked} />
      <Routes>
        <Route
          path="/best-pokemon"
          element={<BestPokemon abilities={abilitiesList} />}
        />
        <Route
          path="/caught-pokemon"
          element={<CaughtPokemon date={new Date().toLocaleDateString()} />}
        />
        <Route path="pokemon-moves" element={<PokemonMovesSelector />}>
          Pokemon Moves Selector
        </Route>
        <Route path="pokemon-city" element={<PokemonCity />}>Pokemon City</Route>
        <Route path="/pokemon/:name" element={<PokemonInfo />}></Route>
      </Routes>
    </Router>
  );
}

function LogWhenClicked() {
  console.log("You just clicked me");
}

export default App;
