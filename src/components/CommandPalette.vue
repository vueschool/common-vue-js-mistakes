<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import { useEventListener } from '@vueuse/core'

const active = ref(false)

function handleKeyboardShortcut(e: KeyboardEvent) {
  if (e.metaKey && e.key === 'k') {
    console.log('toggling command palette')
    active.value = !active.value
    e.preventDefault()
  }
}

onMounted(() => {
  useEventListener(document.body, 'keydown', handleKeyboardShortcut)
})
</script>
<template>
  <div v-if="active">
    <input type="text" placeholder="Command Palette" />
  </div>
</template>
