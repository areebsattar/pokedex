import React from "react";

export function BestPokemon(props) {
  return (
    <div>
      <p>My favorite Pokemon is Pickachu</p>
      <ul>
        {props.abilities.map((ability, id) => (
          <li key={id}>{ability}</li>
        ))}{" "}
      </ul>
    </div>
  );
}