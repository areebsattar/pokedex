import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
function App() {
  const abilitiesList = [
    "Lightning Rod",
    "Growl",
    "Spark",
    "Slam",
    "Tail Whip",
  ];

  const listOfPokemon = [
    "Pikachu",
    "Celebi",
    "Snorlax",
    "Eevee",
    "Charizard",
    "Ditto",
    "Charmander",
    "Squirtle",
    "Mewtwo",
    "Bulbasaur",
    "Mew",
    "Onix",
    "Meowth",
  ];

  return (
    <div>
      <Logo appName={"Areeb's Pokedex"} LogWhenClicked={LogWhenClicked} />
      <BestPokemon abilities={abilitiesList} />
      <CaughtPokemon
        date={new Date().toLocaleDateString()}
        listOfPokemon={listOfPokemon}
      />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

function LogWhenClicked() {
  console.log("You just clicked me");
}

export default App;
