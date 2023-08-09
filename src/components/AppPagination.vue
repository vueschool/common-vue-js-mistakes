<script setup lang="ts">
defineProps({
  page: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  }
})

defineEmits(['update:page'])
</script>
<template>
  <div class="pagination-wrapper">
    <div class="join">
      <button
        data-test="next-page"
        @click="$emit('update:page', page - 1)"
        class="join-item btn"
        :class="{ 'btn-disabled': page === 1 }"
      >
        ﹤
      </button>
      <button class="join-item btn">Page {{ page }}</button>
      <button data-test="next-page" class="join-item btn" @click="$emit('update:page', page + 1)">
        ﹥
      </button>
    </div>
  </div>
</template>
