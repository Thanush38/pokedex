import React from 'react'
import {Radar, RadarChart, PolarGrid,  
  PolarAngleAxis, PolarRadiusAxis } from 'recharts'; 

const Chart = (props) => {
//     const data = [{
//             data: {
//                 hp: props.pokemon.stats[0].base_stat,
                
//                 attack: props.pokemon.stats[1].base_stat,
//                 defense: props.pokemon.stats[2].base_stat,
//                 specialAttack: props.pokemon.stats[3].base_stat,
//                 specialDefense: props.pokemon.stats[4].base_stat,
//                 speed: props.pokemon.stats[5].base_stat
//               },meta : { color: 'blue' }
        
// }];
const data = [
  {name: 'HP', x: props.pokemon.stats[0].base_stat},
  {name: 'Attack', x: props.pokemon.stats[1].base_stat},
  {name: 'Defense', x: props.pokemon.stats[2].base_stat},
  {name: 'Special Attack', x: props.pokemon.stats[3].base_stat},
  {name: 'Special Defense', x: props.pokemon.stats[4].base_stat},
  {name: 'Speed', x: props.pokemon.stats[5].base_stat},
];
    const captions = {
        hp: 'HP',
        attack: 'ATK',
        defense: 'DEF',
        specialAttack: 'SP ATK',
        specialDefense: 'SP DEF',
        speed: 'SPD'
      };
      console.log(data)
  return (
    <div>
      <RadarChart height={500} width={500}  
            outerRadius="80%" data={data}> 
            <PolarGrid /> 
            <PolarAngleAxis dataKey="name" /> 
            <PolarRadiusAxis /> 
            <Radar dataKey="x" stroke="green" 
                fill="green" fillOpacity={0.5} /> 
        </RadarChart> 
    </div>
  )
}

export default Chart
