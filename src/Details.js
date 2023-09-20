import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './Details.css';

function Details(props){
    const colors = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };
    let num =0;
    const types = props.pokemon.types
    //sets color of to respective type
    const typesList = types?.map((type) => {
        let Tcolor = colors[type.type.name]
        num++;
        return <span key={num} className='pokemon-type' style={{backgroundColor: `${Tcolor}`}}>type {num}: {type.type.name}</span>
    })


    return(
        <div>
        <div className='pokemon-image-container'>
            {/*gets image from api*/}
            <img src={props.pokemon.sprites?.front_default} alt="pokemon"/>
        </div>
            <p className='pokemon-info'>Name: {props.pokemon.name}</p>
        
            {typesList}
            <p className='pokemon-info'>height: {props.pokemon.height} dm</p>
            <p className='pokemon-info'>weight: {props.pokemon.weight} hg</p>

        </div>
    )
}

export default Details;