import React from 'react';
import { Link } from 'react-router-dom';


export const PokemonList = ({ pokemons }) => {
  return (
    <div className='card-pokemon-container'>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className='card-pokemon'>
          <Link to={`/pokemon/${pokemon.name}`} className='pokemon-link'>
            <p className='pokemon-name'>{pokemon.name}</p>
            <img className='pokemon-img' src={pokemon.imgUrl} alt={pokemon.name} />
            <p className='pokemon-type'>{pokemon.types ? pokemon.types.join(', ') : ''}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

