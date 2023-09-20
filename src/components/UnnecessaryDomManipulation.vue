<script setup>
import { onMounted, ref } from 'vue'

const goodAdvice = ref('is an opportunity to grow')
const divEl = ref()
</script>

<template>
  <div ref="divEl">
    Failure <span id="advice">{{ goodAdvice }}</span>
  </div>
</template>
