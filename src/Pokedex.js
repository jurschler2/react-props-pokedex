import React from 'react';
import pokemon from './pokemon';
import PokeCard from './Pokecard';

// Create the pokedex using the default pokemon
// To do: add in the defaultProps feature

function Pokedex({pokemon}) {

  return (

    <div>
      <h1>Pokedex</h1>
      { pokemon.map(({name, type, base_experience, id})=> <PokeCard name={name} type={type} base_experience={base_experience} id={id} />) }
    </div>

  );

}

Pokedex.defaultProps = {pokemon};
export default Pokedex;