import { ref } from "vue"
import axios from 'axios'

const usePokemon = (pokemonID = 1) => {
    const urlRef = ref('https://pokeapi.co/api/v2/pokemon/')
    const pokemon = ref('')
    const isLoading = ref(false)
    const errorMessage = ref('')
    const searchPokemon = async (id) => {
        if (!id) return
        isLoading.value = true
        pokemon.value = ''
        try {
            const { data } = await axios.get(urlRef.value + id)
            pokemon.value = data
            errorMessage.value = null
            console.log('DATA ==========> ', data)
            isLoading.value = false
        } catch (error) {
            console.error('ERROR!!! => ', error)
            errorMessage.value = 'Error in serve, please call with support!!!'
            isLoading.value = false
        }
    }
    searchPokemon(pokemonID)
    return {
        pokemon,
        isLoading,
        errorMessage,
        searchPokemon,

    }
}


export default usePokemon