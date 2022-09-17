<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ counter }}</p>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
     <button @click="changeTitle">ChangeTitle</button>
  </div>
</template>

<script>
import useCounter from "@/composables/useCounter";

export default {
  name: "counter-component",
  setup() {
    const { title, counter, increase, decrease, changeTitle } = useCounter(100);
    return {
      title,
      changeTitle,
      counter,
      increase,
      decrease,
    };
  },
};
</script>

<style></style>
