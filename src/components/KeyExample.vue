<script setup lang="ts">
import { shuffle } from 'lodash'
import { ref } from 'vue'

const items = ref([
  { id: 1, label: 'first name' },
  { id: 2, label: 'last name' },
  { id: 3, label: 'email' },
  { id: 4, label: 'website' }
])

function shuffleItems() {
  items.value = shuffle(items.value)
}
</script>

<template>
  <ul>
    <li v-for="item in items">{{ item.label }} <input type="text" /></li>
  </ul>
  <button @click="shuffleItems">Shuffle</button>
</template>

<style>
ul {
  padding: 0;
  padding-right: 10px;
  margin: 0;
  margin-bottom: 10px;
  list-style: none;
}
input {
  max-width: 100%;
}
</style>
