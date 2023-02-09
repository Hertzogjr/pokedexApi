import React from "react";

import Pokemon from "../assets/pokemon.png";
import styles from "./PokemonCard.module.css";
const PokemonCard = ({pokemon}) => {
  return (

    
    <div className={styles.pokemonCard}>
      console.log({pokemon})
      {console.log(pokemon)}
      <div className={styles.imageContainer}>
        <img src={Pokemon} alt="" />
      </div>
      <div className={styles.pokemonDetails}>
        <h3>{pokemon.name}</h3>
        <div className={styles.pokemonType}>
        <span>{pokemon.type}</span>
        <span>grass</span>

        </div>
        <button>🎒 See more</button>
      </div>
    </div>
  );
};

export default PokemonCard;
