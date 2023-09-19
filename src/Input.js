import React from "react";
import {useState } from "react";
import Details from "./Details";
import './Input.css';
function Input(){
    const [pokemon,setPokemon] = useState("");
    const [pokemonData,setPokemonData] = useState([]); // [{}
    const [show,setShow] = useState(false);
    function handleChange(event){
        setPokemon(event.target.value);
    }
   
    const findPokemon= async () => {
        //change pokemon to lowercase
        let lowerPokemon = pokemon.toLowerCase();
        
        const url = "https://pokeapi.co/api/v2/pokemon/"+lowerPokemon;

        try{
            fetch(url)
            .then(response => response.json())
            .then(data => {
                setPokemonData(data);
            })
            setShow(true);
        } catch(error){
            console.log(error);
        }
        
    }
    return(
        <div>
            <div class="input-container">
                <input type="text" placeholder="Search Pokemon" onChange={handleChange}/>
                <button onClick={findPokemon} className='button'>Search</button>
                </div>
            
        
            {show ? <Details pokemon={pokemonData}/> : null}
        </div>
    )
}

export default Input;