import React, { useEffect, useState } from "react";
import Container from "./layout/container/Container";
import PokemonCard from "./PokemonCard";

import styles from "./Pokedex.module.css";
import axios from "axios";
const Pokedex = ({ pokemons }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const url = pokemons.map((item) => item.url);
    console.log({url})

    
    url.map((endpoint) => axios.get(endpoint).then(res => res.json()).then(data => setDetails(data)))
    // axios
    // .all(url.map((endpoint) => axios.get(endpoint)))
    // .then((resp) => setDetails(resp));
    
    // console.log(details);
     }, []);

  return (
    <Container>
      <div className={styles.pokedex}>
        {details.map((item) => (
          <PokemonCard pokemon={item} />
        ))}
      </div>
    </Container>
  );
};

export default Pokedex;
