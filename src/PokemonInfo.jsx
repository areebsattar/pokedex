import { useParams } from "react-router-dom";

export default function PokemonInfo() {
  let { name } = useParams();

  return (
    <>
      <h3>Name : {name} </h3>
    </>
  );
}
