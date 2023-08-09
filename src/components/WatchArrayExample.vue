<script setup lang="ts">
import { ref, watch } from 'vue'
const numbers = ref<number[]>([])

watch(numbers, () => console.log('new number added'), {
  deep: true
})

const randomNum = () => numbers.value.push(Math.random())
</script>
<template>
  <button @click="randomNum">Add Random Number</button>
</template>
