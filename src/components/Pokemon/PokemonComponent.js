import styles from "./PokemonComponent.module.css";
import { Link } from "react-router-dom";

const PokemonComponent = ({ name, img, params, types }) => {
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
