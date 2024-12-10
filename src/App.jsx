import './index.css';
import React, { useEffect, useState } from 'react';
import { getPokemons, getPokemonsByType } from './axios/axios';
import { ThemeProvider } from './contexts/theme-context';

import { AppInner } from './components/AppInner/AppInner';

function App() {
  const [pokemonCount, setPokemonCount] = useState(10);
  const [pokemons, setPokemons] = useState([]);
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (filterType) { 
        const data = await getPokemonsByType(filterType);
        setPokemons(data);
      } else {
        const data = await getPokemons(pokemonCount);
        setPokemons(data);
      }
    };
    fetchData();
  }, [pokemonCount, filterType]);

  const loadMorePokemons = () => {
    setPokemonCount(prevCount => pokemonCount + 10);
  };

  return (
    <ThemeProvider>
      <AppInner 
        pokemons={pokemons} 
        loadMorePokemons={loadMorePokemons} 
        filterType={filterType} 
        setFilterType={setFilterType} 
      />
    </ThemeProvider>
  );
}

export default App;
