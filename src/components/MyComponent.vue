<script setup lang="ts">
import MyChildComponent from '@/components/MyChildComponent.vue'
import { useCounter } from '@/composables/useCounter'
const { count } = useCounter()
</script>
<template>
  <ul>
    <li>In Top Component {{ count }}</li>
    <MyChildComponent />
  </ul>
</template>
