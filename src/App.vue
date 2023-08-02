<script setup lang="ts">
import { useCounter } from './composables/useCounter'
import MyComponent from '@/components/MyComponent.vue'
const { count } = useCounter()
</script>
<template>
  <button @click="count++">count</button>
  <MyComponent />
</template>
