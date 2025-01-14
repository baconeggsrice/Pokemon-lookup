import React, { useEffect, useState } from 'react';
import { fetchdata } from "../fetches/FetchData";
import { pokemonStyle } from './styles';
import { fetchSprite } from '../fetches/FetchSprite';


function DisplayPokemon({ pokemon }) {
    const [pokemonData, setPokemonData] = useState(null);
    const [sprite, setSprite] = useState(null);
    const [types, setTypes] = useState('');

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const data = await fetchdata(pokemon);

                const spriteData = await fetchSprite(pokemon);
                let typesList = '';
                data.types.forEach((item) => {
                    console.log("Type:", item.type.name);
                    typesList += item.type.name.toUpperCase() + ' ';
                });
                
                setPokemonData(data);
                setSprite(spriteData);
                setTypes(typesList.trimEnd());
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
            <img src={sprite} alt={`${pokemonData.name} sprite`}/>
            <h2>{pokemonData.name.toUpperCase()}</h2>
            <h3>Types: {types} </h3>
            
        </div>
    );
}

export default DisplayPokemon;