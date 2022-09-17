import { ref } from "vue"
import axios from 'axios'

const usePokemon = (pokemonID = 1) => {
    const urlRef = ref('https://pokeapi.co/api/v2/pokemon/')
    const pokemon = ref(null)
    const isLoading = ref(false)
    const errorMessage = ref('')
    const searchPokemon = async () => {
        isLoading.value = true
        pokemon.value = null

        try {
            const { data } = await axios.get(urlRef.value + pokemonID)
            pokemon.value = data
            errorMessage.value = null
            console.log('DATA ==========> ', data)
            isLoading.value = false

        } catch (error) {
            console.error('ERROR!!! => ',error)
            errorMessage.value = 'Error in serve, please call with support!!!'
            isLoading.value = false
        }

    }
    searchPokemon()



    return {
        pokemon,
        isLoading,
        errorMessage,

    }
}


export default usePokemon