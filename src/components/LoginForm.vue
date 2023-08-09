<script setup lang="ts">
import { ref, watch } from 'vue'
type Props = {
  modelValue: {
    email: string
    password: string
  }
}

const props = defineProps<Props>()
const localValue = ref({ ...props.modelValue })
watch(
  () => props.modelValue,
  (val) => (localValue.value = val),
  {
    deep: true
  }
)
defineEmits<{
  (e: 'update:modelValue', payload: Props['modelValue']): void
}>()
</script>
<template>
  <form @submit.prevent="$emit('update:modelValue', { ...localValue })">
    <div>
      <label for="email">Email</label>
      <input type="email" v-model="localValue.email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" v-model="localValue.password" />
    </div>

    <button>Login</button>
  </form>
</template>
