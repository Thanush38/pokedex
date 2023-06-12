import React from 'react';

function Details(props){
    let num =0;
    const printtypes = () => {
        console.log(props.pokemon.types)
    }
    
    // const tt=[]
    // const types = props.pokemon.types
    
    // tt.push(types[0].type.name)
    
    // console.log(tt)
    // console.log(props.pokemon)

    return(
        <div>
            <p>name: {props.pokemon.name}</p>
            {/* {types()} */}
            {/* <p>type: {props.pokemon.types[0].type.name}</p> */}
            <p>height: {props.pokemon.height}</p>
            <p>weight: {props.pokemon.weight}</p>

        </div>
    )
}

export default Details;