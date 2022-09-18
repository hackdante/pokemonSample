<template>
  <div class="pokemon-container">
    <div class="loader" v-if="isLoading">
      <div>
        <div class="text-loader">wait!!! - Search a Pokemon....</div>
        <router-link :to="{ name: 'pokemon-view' }">Back to </router-link>
      </div>
    </div>
    <div class="loader warning-error" v-else-if="!pokemon">
      <div>
        <div class="text-loader">No hay pokemon</div>
        <router-link :to="{ name: 'pokemon-view' }">Back to </router-link>
      </div>
    </div>
    <div class="loader loader-error" v-else-if="errorMessage">
      <div>
        <div class="text-loader">{{ errorMessage }}</div>
        <router-link :to="{ name: 'pokemon-view' }">Back to </router-link>
      </div>
    </div>

    <div class="pokemon-content" v-else>
      <h2>This Pokemon is {{ pokemon.name }}</h2>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <hr />

      <router-link :to="{ name: 'pokemon-view' }">Back to </router-link>
    </div>
  </div>
</template>

<script>
import { watch } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import usePokemon from "../composables/usePokemon";
export default {
  name: "PokemonView",
  setup() {
    const route = useRoute();
    const { pokemon, isLoading, errorMessage, searchPokemon } = usePokemon(
      route.params.id
    );

    onBeforeRouteLeave(() => {
      const answer = window.confirm("Are You Sure?");
      console.log({ answer });
      if (!answer) return false;
    });

    watch(
      () => route.params.id,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
        searchPokemon(route.params.id);
      }
    );

    return {
      pokemon,
      isLoading,
      errorMessage,
    };
  },
};
</script>

<style>
.loader {
  width: 100vw;
  background: gray;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  font-size: 3rem;
  color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
}
</style>
