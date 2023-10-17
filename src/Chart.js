import React from 'react'
import {Radar, RadarChart, PolarGrid,  
  PolarAngleAxis, PolarRadiusAxis } from 'recharts'; 

const Chart = (props) => {
const data = [
  {name: 'HP', x: props.pokemon.stats[0].base_stat},
  {name: 'Attack', x: props.pokemon.stats[1].base_stat},
  {name: 'Defense', x: props.pokemon.stats[2].base_stat},
  {name: 'Special Attack', x: props.pokemon.stats[3].base_stat},
  {name: 'Special Defense', x: props.pokemon.stats[4].base_stat},
  {name: 'Speed', x: props.pokemon.stats[5].base_stat},
];
  return (
    <div>
      <RadarChart height={400} width={400}  
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
