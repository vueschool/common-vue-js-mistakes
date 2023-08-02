<script setup lang="ts">
import MyGrandChildComponent from './MyGrandChildComponent.vue'
import { useCounter } from '@/composables/useCounter'
const { count } = useCounter()
</script>
<template>
  <ul>
    <li>In Child: {{ count }}</li>
    <MyGrandChildComponent />
  </ul>
</template>
