import React from "react";
import {useState } from "react";
import Details from "./Details.js";
import axios from "axios";
function Input(){
    const [pokemon,setPokemon] = useState("");
    const [pokemonData,setPokemonData] = useState([]); // [{}
    const [show,setShow] = useState(false);
    function handleChange(event){
        setPokemon(event.target.value);
    }
   
    const findPokemon= async () => {
        
        const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon;
        try{
            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPokemonData(data);
            })
        } catch(error){
            console.log(error);
        }
        setShow(true);
    }
    return(
        <div>
            <input type="text" placeholder="Search Pokemon" onChange={handleChange}/>
            <button onClick={findPokemon}>Search</button>
            {show ? <Details pokemon={pokemonData}/> : null}
            {show ? <p>type: {pokemonData.types[0].type.name}</p>: null}
        </div>
    )
}

export default Input;