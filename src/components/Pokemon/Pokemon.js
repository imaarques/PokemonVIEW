import styles from "./Pokemon.module.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonComponent from "./PokemonComponent";

const Pokemon = () => {
  const { name } = useParams();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i <= 100; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  // console.log(pokemons);
  return (
    <div className={styles.pokemon_container}>
      {pokemons.map((pokemon, key) => (
        <PokemonComponent
          name={pokemon.data.name}
          img={pokemon.data.sprites.front_default}
          types={pokemon.data.types}
          params={name}
          key={key}
        />
      ))}
    </div>
  );
};

export default Pokemon;
