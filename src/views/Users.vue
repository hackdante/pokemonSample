<template>
  <div class="user-list-page">
    <h1 class="text-center" v-if="isLoading">Wait please, loading users!!!</h1>
    <h2 class="text-center" v-else>{{ name }}</h2>
    <h5 class="text-center" v-if="errorMessage">{{ errorMessage }}</h5>
    <div v-if="users.length > 0">
      <ul class="user-list">
        <li
          class="user-list-card"
          v-for="{ avatar, first_name, last_name, email, id } in users"
          :key="id"
        >
          <img class="avatar-card" :src="avatar" :alt="first_name + ' ' + last_name" />
          <div class="user-content-info">
          <h4>{{ first_name }} {{ last_name }}</h4>
          <h6>{{ email }}</h6>
          </div>
        </li>
      </ul>
    </div>
    <div class="container-buttons">
      <button class="btn-controller" @click="prevPage">Prev</button>
      <button class="btn-controller" @click="nextPage">Next</button>
    </div>
    <p class="users-pagination">-Page {{ currentPage }}-</p>
  </div>
</template>

<script>
import useUsers from "../composables/useUsers";
export default {
  name: "UsersView",
  setup() {
    const {
      name,
      users,
      isLoading,
      currentPage,
      errorMessage,
      nextPage,
      prevPage,
    } = useUsers();

    return {
      name,
      users,
      isLoading,
      currentPage,
      errorMessage,
      nextPage,
      prevPage,
    };
  },
};
</script>

<style>
.user-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1%;
}
.user-list-card {
    width: 180;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    overflow: hidden;
    background: rgba(0,0,0,0.05);
}

.avatar-card {
    object-fit: cover;
    width: 100%;
}
.user-content-info {
    padding: 4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
}

.text-center {
  text-align: center;
}
.container-buttons {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.users-pagination {
  display: block;
  width: 100%;
  text-align: center;
}

.btn-controller {
    margin: 0.3rem;
    font-size: 1rem;
    font-weight: 600;
    color: rgba(0,0,0,0.6);
    border: none;
    padding: 1rem;
    border-radius: 50px;
}
</style>
