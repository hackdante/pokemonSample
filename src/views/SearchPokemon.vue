<template>
  <div class="pokemon-container">
    <h2>Search a Pokemon</h2>
    <form @submit.prevent="onSubmit">
      <input
        type="number"
        placeholder="Search Pokemon by Number"
        autofocus
        v-model="pokemonID"
        ref="searchAutoFocus"
      />
    </form>

    <span>Press enter for Search!!!</span>
    <hr />
  </div>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "SearchPokemon",
  setup() {
    const router = useRouter();
    const pokemonID = ref(1);
    const searchAutoFocus = ref(null);
    onActivated(() => searchAutoFocus.value.select());

    return {
      pokemonID,
      searchAutoFocus,
      onSubmit: () => {
        console.log("Search Pokemon ID: ", pokemonID.value);
        router.push({ name: "pokemon-id", params: { id: pokemonID.value } });
      },
    };
  },
};
</script>

<style scoped>
.pokemon-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
