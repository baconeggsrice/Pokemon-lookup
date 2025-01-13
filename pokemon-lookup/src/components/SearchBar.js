import React, { useState } from 'react';
import { searchContainer, searchBox, pokemonStyle } from './styles.js';
import DisplayPokemon from './DisplayPokemon.js';

function SearchBar() {
    const [pokemon, setPokemon] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            setPokemon((searchTerm));
            console.log("Search Term: ", searchTerm);
            console.log("Pokemon: ", pokemon);
        }
    };

    return (
        <div style={searchContainer}>
            <div style={searchBox}>
                <input 
                    className="search-box" 
                    type="text" 
                    placeholder="Search a Pokemon" 
                    value={searchTerm} 
                    onChange={event => setSearchTerm(event.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div style={pokemonStyle}>
                {pokemon && <DisplayPokemon pokemon={pokemon} />}
            </div>
        </div>
        
    );
}

export default SearchBar;