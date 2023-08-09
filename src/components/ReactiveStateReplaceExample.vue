<script setup>
import { ref, watch, reactive, computed } from 'vue'
import AppPagination from './AppPagination.vue'
import { useDummyJSON } from '@/composables/useDummyJSON'

const page = ref(1)
const perPage = ref(12)
let posts = ref([])
const counter = ref(0)

const { getPosts } = useDummyJSON()
async function fetchPosts() {
  const fetchedPosts = await getPosts(perPage.value, page.value)
  posts.value = fetchedPosts
  counter.value++
}

fetchPosts()
watch(page, fetchPosts)
watch(posts, () => console.log('posts updated'), {
  deep: true
})
const numOfPosts = computed(() => posts.value.length)
</script>

<template>
  <div>
    <h1>My Posts {{ counter }}</h1>
    <p>Number of Posts: {{ numOfPosts }}</p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <span>{{ post.id }}</span>
        {{ post.title }}
      </li>
    </ul>
    <AppPagination v-model:page="page" :perPage="perPage" />
  </div>
</template>
