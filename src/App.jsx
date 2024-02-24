import React from "react"
import Logo from "./Logo"
import {BestPokemon} from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
function App() {
  return (
    <div>
      <Logo appName={"Areeb's Pokedex"} />
      <BestPokemon abilities = {["Lightning Rod", "Growl", "Spark", "Slam", "Tail Whip"]}/>
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
}


export default App;
