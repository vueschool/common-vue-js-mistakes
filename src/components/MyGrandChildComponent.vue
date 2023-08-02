<script setup lang="ts">
import { useCounter } from '@/composables/useCounter'
const { count } = useCounter()
</script>
<template>
  <ul>
    <li>In Grandchild: {{ count }}</li>
  </ul>
</template>
