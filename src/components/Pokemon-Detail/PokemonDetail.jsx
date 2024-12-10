import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);

        const abilitiesData = await Promise.all(
          response.data.abilities.map(async (abilityInfo) => {
            const abilityResponse = await axios.get(abilityInfo.ability.url);
            return {
              name: abilityInfo.ability.name,
              description: abilityResponse.data.effect_entries.find(entry => entry.language.name === 'en').short_effect
            };
          })
        );
        setAbilities(abilitiesData);
      } catch (error) {
        console.error('Erro ao buscar os detalhes do Pokémon:', error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (!pokemon) return <p>Carregando...</p>;

  return (
    <div>
      <h1 className='pokemon-nome'>{pokemon.name}</h1>
      <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      <h2>Tipo</h2>
      <ul>
        {pokemon.types.map((typeInfo) => (
          <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
        ))}
      </ul>
      <h2>Movimentos</h2>
      <ul>
        {pokemon.moves.map((moveInfo) => (
          <li key={moveInfo.move.name}>{moveInfo.move.name}</li>
        ))}
      </ul>
      <h2>Habilidades</h2>
      <ul>
        {abilities.map((ability) => (
          <li key={ability.name}>
            <strong>{ability.name}:</strong> {ability.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
