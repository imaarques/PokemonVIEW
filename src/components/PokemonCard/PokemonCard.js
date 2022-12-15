import * as React from "react";
import styles from "./PokemonCard.module.css";
import { Link } from "react-router-dom";

export default function PokemonCard({ name, img, types }) {
  const typeHandler = () => {
    if (types[1]) {
      return (
        <span className={styles.element}>
          <span>{types[0].type.name}</span>
          <span>{types[1].type.name}</span>
        </span>
      );
    }
    return (
      <span className={styles.element}>
        <span>{types[0].type.name}</span>
      </span>
    );
  };

  return (
    <div className={styles.pokemon_card}>
      <Link className={styles.btn} to={`/pokemons/${name}`}>
        <img src={img} alt={name} />
      </Link>
      <div className={styles.pokemon_details}>
        <h2>{name}</h2>
        <p>{typeHandler()}</p>
      </div>
      <Link className={styles.btn_pokemon} to={`/pokemons/${name}`}>
        Ver Pokemon
      </Link>
    </div>
  );
}
