<script setup>
import { reactive, toRefs } from 'vue'
import { useLion } from '@/composables/useLion'
const { diet, lifespan, name } = useLion()
</script>

<template>
  <ul>
    <li>Name: {{ name }}</li>
    <li>Diet: {{ diet }}</li>
    <li>Lifespan: {{ lifespan }}</li>
  </ul>
</template>
