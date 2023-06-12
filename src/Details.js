import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

function Details(props){
    let num =0;
    const types = props.pokemon.types
    const typesList = types.map((type) => {
        num++;
        return <p key={num}>type {num}: {type.type.name}</p>
    })

   

    return(
        <div>
            <p>name: {props.pokemon.name}</p>
            {/* {types()} */}
            {typesList}
            <p>height: {props.pokemon.height}</p>
            <p>weight: {props.pokemon.weight}</p>

        </div>
    )
}

export default Details;