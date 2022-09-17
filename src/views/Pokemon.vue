<template>
  <div class="pokemon-container">
    <div class="loader" v-if="isLoading">
      <div class="text-loader">wait!!! - Search a Pokemon....</div>
    </div>
    <div class="loader-error" v-if="errorMessage">
      <div class="text-loader">{{ errorMessage }}</div>
    </div>

    <div class="pokemon-content" v-else>
      <h2>This Pokemon is {{ pokemon.name }}</h2>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import usePokemon from "../composables/usePokemon";
export default {
  name: "PokemonView",
  setup() {
    const { params } = useRoute();
    const { pokemon, isLoading, errorMessage } = usePokemon(params.id);

    return {
      pokemon,
      isLoading,
      errorMessage,
    };
  },
};
</script>

<style></style>
