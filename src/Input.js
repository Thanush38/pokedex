import React from "react";
import { useState } from "react";
import Details from "./Details.js";
import "./Input.css";

function Input() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [show, setShow] = useState(false);
  
  function handleChange(event) {
    setPokemon(event.target.value);
  }
  //to call setPokemon when enter is clicked
  const enter = (event) => {
    if (event.key === "Enter") {
      findPokemon();
    }
  };

  const findPokemon = async () => {
    let lowerPokemon = pokemon.toLowerCase();

    const url = "https://pokeapi.co/api/v2/pokemon/" + lowerPokemon;

    const res = await fetch(url);
    if (!res.ok) {
      alert("Pokemon not found");
      setShow(false);
      return;
    }
    const data = await res.json();
    setPokemonData(data);
    setShow(true);
  };
  return (
    <div>
      <div class="input-container">
        <input
          type="text"
          placeholder="Search Pokemon"
          onChange={handleChange}
          onKeyUp={enter}
        />
        <button onClick={findPokemon} className="button">
          Search
        </button>
      </div>

      {show ? <Details pokemon={pokemonData} /> : null}
    </div>
  );
}

export default Input;
