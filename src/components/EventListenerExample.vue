<script setup lang="ts">
import { ref } from 'vue'
import CommandPalette from './CommandPalette.vue'
const enabled = ref(true)
</script>
<template>
  <p>Cleaning Up Global Event Listeners Example</p>
  <label>
    <input type="checkbox" v-model="enabled" />
    {{ enabled ? 'Enabled' : 'Disabled' }}
  </label>

  <CommandPalette v-if="enabled" />
</template>
