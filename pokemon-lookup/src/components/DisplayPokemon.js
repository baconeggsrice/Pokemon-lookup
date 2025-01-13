import React, { useEffect, useState } from 'react';
import { fetchdata } from "../fetches/FetchData";
import { pokemonStyle } from './styles';
import { fetchSprite } from '../fetches/FetchSprite';



function DisplayPokemon({ pokemon }) {
    const [pokemonData, setPokemonData] = useState(null);
    const [sprite, setSprite] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const data = await fetchdata(pokemon);

                const spriteData = await fetchSprite(pokemon);
                console.log("Sprite data:", spriteData);
                console.log("Sprite URL:", sprite);

                setPokemonData(data);
                setSprite(spriteData);
            } catch (error) {
                console.log(error);
                setPokemonData(null);
                setSprite(null);
            }
        };

        if (pokemon) {
            fetchPokemonData();
        }
    }, [pokemon]);
    
    if (!pokemonData) {
        console.log("DID NOT WORK");
        return <div>Not Found</div>
    }
    
    return (
        <div sytle={pokemonStyle}>
            <h2>{pokemonData.name.toUpperCase()}</h2>
            <h3>Types: {pokemonData.type}</h3>
            <img src={sprite} alt={`${pokemonData.name} sprite`}/>
        </div>
    );
}

export default DisplayPokemon;