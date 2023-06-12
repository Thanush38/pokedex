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
    function findPokemon(){
        setShow(true);
        const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon;
        try{
            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setPokemon(data);
            })
        } catch(error){
            console.log(error);
        }
    }
    return(
        <div>
            <input type="text" placeholder="Search Pokemon" onChange={handleChange}/>
            <button onClick={findPokemon}>Search</button>
            {show ? <Details pokemon={pokemon}/> : null}
        </div>
    )
}

export default Input;