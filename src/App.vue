<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import CardsPage from './components/CardsPage.vue'
</script>

<template>
  <v-row>
    <v-col cols="10">
      <header>
        <div class="wrapper">
          <nav class="d-flex justify-center">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/change">Change</RouterLink>
          </nav>
        </div>
      </header>
    </v-col>
  </v-row>
  <RouterView />
</template>

<style scoped>
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
