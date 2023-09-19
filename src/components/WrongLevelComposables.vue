<script setup lang="ts">
import { useA } from '@/composables/useA'
const a = useA()
</script>
<template>
  <div>Only use composables at the top level of script setup</div>
</template>
