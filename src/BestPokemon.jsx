

export default function BestPokemon({ abilities }) {
  return (
    <div>
      <p>My favorite Pokemon is Pickachu</p>
      <ul>
        {abilities.map((ability, id) => (
          <li key={id}>{ability}</li>
        ))}
      </ul>
    </div>
  );
}