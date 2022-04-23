<template>
  <div class="container">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <a href="">{{ thread.title }}</a>
          </p>

          <p class="text-faded text-xsmall">By <a href="">{{ userById(thread.userId).name }}/a>, {{ thread.publishedAt }}</p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.posts.length }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      threads: sourceData.threads,
      users: sourceData.users,
      posts: sourceData.posts
    }
  },
  computed: {
    thread () {
      return this.threads.find((thread) => thread.id === this.$route.params.id)
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find((post) => post.id === postId)
    },

    userById (userId) {
      return this.users.find((post) => post.id === userId)
    }
  }
}
</script>

<style>
</style>
