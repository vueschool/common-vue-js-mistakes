<script setup lang="ts">
import { ref } from 'vue'
const user = ref({
  username: 'danielkelly_io',
  email: 'daniel@vueschool.io',
  name: 'Daniel Kelly'
})
</script>

<template>
  <ul>
    <li>
      <strong>Username</strong>
      <span>{{ user.username }}</span>
    </li>
    <li>
      <strong>Email</strong>
      <span>{{ user.email }}</span>
    </li>
    <li>
      <strong>Name</strong>
      <span>{{ user.name }}</span>
    </li>
  </ul>
</template>
