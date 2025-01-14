import axios from 'axios';

export async function fetchSprite(pokemon) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        return response.data.sprites.front_default;
    } catch (e) {
        console.error("Error fetching sprite from PokeAPI", e.message);
        if (e.response) {
            console.error("API response error:", e.response.data);
        }
        return null;
    }
    
}