import axios from "axios";

export async function getPokemons(limit) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const pokemons = response.data.results;

        const pokemonData = await Promise.all(
            pokemons.map(async (pokemon) => {   
                const pokemonDetails = await axios.get(pokemon.url);
                return {
                    name: pokemon.name,
                    imgUrl: pokemonDetails.data.sprites.other['official-artwork'].front_default,
                    types: pokemonDetails.data.types.map(typeInfo => typeInfo.type.name)
                };
            })
        );
        return pokemonData;

    }   catch (error) {
        console.error('Erro ao buscar os pokémons:', error);
        return [];
    }
}

export async function getPokemonsByType(type) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
        const pokemons = response.data.pokemon.map(pokemonInfo => pokemonInfo.pokemon);

        const pokemonData = await Promise.all(
            pokemons.map(async (pokemon) => {
                const pokemonDetails = await axios.get(pokemon.url);
                return {
                    name: pokemon.name,
                    imgUrl: pokemonDetails.data.sprites.other['official-artwork'].front_default
                };
            })
        );
        return pokemonData;

    } catch (error) {
        console.error('Erro ao buscar os pokémons por tipo:', error);
        return [];
    }
}
