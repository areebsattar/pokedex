import { useState } from "react";

export default function CaughtPokemon({ date, listOfPokemon }) {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    setCaught([...caught, showRandomPokemon()]);
  }

  function showRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * listOfPokemon.length);
    return listOfPokemon[randomIndex];
  }

  return (
    <>
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
