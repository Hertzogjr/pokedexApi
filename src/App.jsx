import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Title from "./components/layout/title/Title";
import Pokedex from "./components/Pokedex";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      const sortedArray = [...response.data.results];
      sortedArray.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      return setPokemons(sortedArray);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Title />
      <Pokedex pokemons={pokemons} />
    </>
  );
}

export default App;
