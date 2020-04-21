import React from 'react';

// Creates an HTML card for a singular pokemon
function PokeCard({name, id, type, base_experience}) {

  return(
    <div className="card">
      <h6>{name}</h6>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} className="card-img-top"/>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

// To further break things out replace image with another module, ex.: <PokeImage id={id} /> 

export default PokeCard;