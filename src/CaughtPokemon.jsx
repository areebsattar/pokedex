import { useState } from "react";

export default function CaughtPokemon({ date, listOfPokemon }) {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setpokemonNameInput] = useState("");

  function catchPokemon() {
    setCaught([...caught, pokemonNameInput]);
    setpokemonNameInput("");
  }

  function handleInputChange(event) {
    setpokemonNameInput(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Catch a Pokemon</button>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
      <ul>
        {caught.map((pokemon, id) => (
          <li key={id}>{pokemon}</li>
        ))}
      </ul>
    </>
  );
}
