import * as React from "react";
import styles from "./PokemonCard.module.css";
import { Link } from "react-router-dom";

export default function PokemonCard({ name, img, types, index }) {
  const typeHandler = () => {
    return (
      <span className={styles.element}>
        {types.map((type, index) => (
          <span key={index}>
            {type.type.name === "grass" ? "Grama" : ""}
            {type.type.name === "poison" ? "Venenoso" : ""}
            {type.type.name === "fire" ? "Fogo" : ""}
            {type.type.name === "flying" ? "Voador" : ""}
            {type.type.name === "water" ? "Água" : ""}
            {type.type.name === "bug" ? "Inseto" : ""}
            {type.type.name === "normal" ? "Normal" : ""}
            {type.type.name === "electric" ? "Elétrico" : ""}
            {type.type.name === "ground" ? "Terrestre" : ""}
            {type.type.name === "fairy" ? "Fada" : ""}
            {type.type.name === "fighting" ? "Lutador" : ""}
            {type.type.name === "psychic" ? "Psíquico" : ""}
            {type.type.name === "rock" ? "Pedra" : ""}
            {type.type.name === "steel" ? "Aço" : ""}
            {type.type.name === "ice" ? "Gelo" : ""}
            {type.type.name === "ghost" ? "Fantasma" : ""}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div className={styles.pokemon_card}>
      <Link className={styles.btn} to={`/pokemons/${name}`}>
        <span>{index}</span>
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
