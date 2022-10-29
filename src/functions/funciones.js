import axios from "axios";

const AllCharacters = async (state) => {
    const llamada = await axios.get("https://rickandmortyapi.com/api/character ")
    state(llamada.data.results)
}

export {
    AllCharacters
}