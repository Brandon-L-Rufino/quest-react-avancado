import React, { useContext } from 'react';
import { Button } from '../Button/Button';
import { AppRoutes } from '../../routes/routes';
import { PokemonList } from '../../PokemonList/PokemonList';
import { ThemeTogglerButton } from '../theme-toggler-button/theme-toggler-button';
import { ThemeContext } from '../../contexts/theme-context';


export const AppInner = ({ pokemons, loadMorePokemons, filterType, setFilterType }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{ color: theme.color, backgroundColor: theme.background }}>
            <AppRoutes>
                <>
                    <div className="btn-container">
                        <ThemeTogglerButton />
                        <select className="btn-type-filter" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                            <option value="">Todos</option>
                            <option value="grass">Grama</option>
                            <option value="fire">Fogo</option>
                            <option value="water">Água</option>
                            <option value="bug">Inseto</option>
                            <option value="normal">Normal</option>
                            <option value="poison">Veneno</option>
                            <option value="electric">Elétrico</option>
                            <option value="ground">Terra</option>
                            <option value="fairy">Fada</option>
                            <option value="fighting">Lutador</option>
                            <option value="psychic">Psíquico</option>
                            <option value="rock">Pedra</option>
                            <option value="ghost">Fantasma</option>
                            <option value="ice">Gelo</option>
                            <option value="dragon">Dragão</option>
                            <option value="dark">Sombrio</option>
                            <option value="steel">Aço</option>
                            <option value="flying">Voador</option>
                        </select>
                    </div>
                    <PokemonList pokemons={pokemons} />
                    <div className='container-view-more'>
                        <Button label="Ver mais" onClick={loadMorePokemons} />
                    </div>
                </>
            </AppRoutes>
        </div>
    );
};
