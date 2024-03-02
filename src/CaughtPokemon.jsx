import { useState } from "react";

export default function CaughtPokemon({ date }) {
  const [Caught, setCaught] = useState(0);

  function CatchPokemon() {
    setCaught(Caught + 1);
  }

  return (
    <>
      <button onClick={CatchPokemon}>Catch a Pokemon</button>
      <p>
        Caught {Caught} Pokemon on {date}
      </p>
    </>
  );
}
