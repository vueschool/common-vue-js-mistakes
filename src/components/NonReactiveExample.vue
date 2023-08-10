<script setup lang="ts">
import { computed, ref } from 'vue'
const reactiveData = ref(localStorage.getItem('data'))

function updateData(e: Event) {
  const data = (e.target as HTMLInputElement).value
  localStorage.setItem('data', data || '')
  reactiveData.value = data
}
</script>

<template>
  <div>
    <input type="text" @input="updateData" :value="reactiveData" />
  </div>
  <pre>{{ reactiveData }}</pre>
</template>
