<template>
<div class="pokemon-container">
    <h2>Pokemon Vue</h2>
</div>
  
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    name: 'PokemonView',
    setup(){
        const {params} = useRoute()
        console.log(params)
    }
}
</script>

<style>


</style>