<script setup lang="ts">
import { ref } from 'vue'
import LoginForm from '@/components/LoginForm.vue'
const loginData = ref({
  email: 'me@test.com',
  password: '1234'
})
</script>
<template>
  <LoginForm v-model="loginData" />
  <pre>
  {{ loginData }}
</pre
  >
</template>
