import styles from "./PokemonComponent.module.css";
import { Link } from "react-router-dom";

const PokemonComponent = ({ name, img, params, types }) => {
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
    <div>
      {(() => {
        if (name === params) {
          return (
            <div className={styles.pokemon_content}>
              <Link className={styles.btn_pokemon} to={`/`}>
                Voltar
              </Link>
              <div className={styles.pokemon_imagem_box}>
                <img src={img} alt={name} />
              </div>
              <div className={styles.pokemon_box}>
                <h2>{name}</h2>
                <p>{typeHandler()}</p>
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
};

export default PokemonComponent;
