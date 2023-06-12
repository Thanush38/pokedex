import React from "react";
import {useState } from "react";
import Details from "./Details.js";
import axios from "axios";
function Input(){
    const [pokemon,setPokemon] = useState("");
    const [show,setShow] = useState(false);
    function handleChange(event){
        setPokemon(event.target.value);
    }
    const pokemonData = [];
    const findPokemon= async()=>{
        try{
            
            const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon;
            const res = await axios.get(url)
            pokemonData.push(res.data);
            setShow(true);
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div>
            <input type="text" placeholder="Search Pokemon" onChange={handleChange}/>
            <button onClick={findPokemon}>Search</button>
            {show ? <Details pokemon={pokemonData}/> : null}
        </div>
    )
}

export default Input;