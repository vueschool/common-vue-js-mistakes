<script setup lang="ts">
import { ref } from 'vue'
const comments = ref([
  "<p>Hello I'm a <strong>rich text</strong> comment</p>",
  "<h2>Don't I think I'm fancy 🎩</h2>",
  `<p>hello <strong>world</strong></p>
<img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ5pAUkFjASncLgVEsqVbwyTj0LP1ObO85jakWZEibYYmjHzzQux9-C1zQ2DXiZnAldF_l5_EXyZXQqQf4"
onload="window.location='https://google.com'"
/>`
])

const newComment = ref('')
function addComment() {
  comments.value.push(newComment.value)
  newComment.value = ''
}
</script>
<template>
  <form @submit.prevent="addComment">
    <textarea v-model="newComment" cols="30" rows="10"></textarea>
    <br />
    <button>Submit</button>
  </form>
  <ul>
    <li v-for="comment in comments" :key="comment" v-html="comment"></li>
  </ul>
</template>
