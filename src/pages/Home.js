import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import axios from "axios";
import styles from "./Home.module.css";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonFilter, setPokemonFilter] = useState("");

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

  // const pokemonFilter = (name) => {
  //   var filteredPokemons = [];
  //   if (name.toLowerCase() === "") {
  //     getPokemons();
  //   }
  //   for (var i in pokemons) {
  //     if (pokemons[i].data.name.includes(name.toLowerCase())) {
  //       filteredPokemons.push(pokemons[i]);
  //     }
  //   }
  //   setPokemons(filteredPokemons);
  // };

  //     axios
  //       .get("https://pokeapi.co/api/v2/pokemon?limit=50")
  //       .then((res) => setPokemons(res.data.results))
  //       .catch((err) => console.log(err));
  //

  return (
    <div className="styles.container">
      <div className={styles.header_container}>
        <div className={styles.header_content}>
          <h1 className={styles.pokemon_logo}>PokemonVIEW</h1>
          <form>
            <input
              type="text"
              placeholder="Pesquisar Pokemon..."
              onChange={(e) => setPokemonFilter(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className={styles.pokemon_container}>
        <div className={styles.pokemon_content}>
          {pokemons
            .filter((pokemon) =>
              pokemon.data.name
                .toLowerCase()
                .includes(pokemonFilter.toLowerCase())
            )
            .map((pokemon, key) => (
              <PokemonCard
                name={pokemon.data.name}
                img={pokemon.data.sprites.front_default}
                types={pokemon.data.types}
                key={key}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
