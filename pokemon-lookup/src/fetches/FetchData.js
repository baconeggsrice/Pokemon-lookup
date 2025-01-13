import axios from 'axios';

export async function fetchdata(pokemon) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        return response.data;
    } catch(e) {
        console.error("Error fetching data from PokeAPI", e.message);
        if (e.response) {
            console.error("API response error:", e.response.data);
        }
        return null;
    };
}