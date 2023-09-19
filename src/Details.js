import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './Details.css';

function Details(props){
    let num =0;
    const types = props.pokemon.types
    const typesList = types?.map((type) => {
        num++;
        return <span key={num} className='pokemon-type'>type {num}: {type.type.name}</span>
    })

    // const tt=[]
    // const types = props.pokemon.types
    
    // tt.push(types[0].type.name)
    
    // console.log(tt)
    // console.log(props.pokemon)

    return(
        <div>
        <div className='pokemon-image-container'>
            <img src={props.pokemon.sprites?.front_default} alt="pokemon"/>
            {/* <img src={props.pokemon.sprites?.back_default} alt="pokemon"/> */}
        </div>
            <p className='pokemon-info'>Name: {props.pokemon.name}</p>
            {/* {types()} */}
            {typesList}
            <p className='pokemon-info'>height: {props.pokemon.height}</p>
            <p className='pokemon-info'>weight: {props.pokemon.weight}</p>

        </div>
    )
}

export default Details;