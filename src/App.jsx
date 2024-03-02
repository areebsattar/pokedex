import React from "react"
import Logo from "./Logo"
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
function App() {
  const abilitiesList = [
    "Lightning Rod",
    "Growl",
    "Spark",
    "Slam",
    "Tail Whip",
  ];
  return (
    <div>
      <Logo appName={"Areeb's Pokedex"} />
      <BestPokemon abilities = {abilitiesList}/>
      <CaughtPokemon date = {new Date().toLocaleDateString()}/>
    </div>
  );
}


export default App;
