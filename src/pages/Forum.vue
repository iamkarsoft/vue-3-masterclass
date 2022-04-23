<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>Cooking</h1>
        <p class="text-lead">Discuss your passion</p>
      </div>
        <a href="">start a thread</a>

    </div>
  </div>

    <div class="col-full">
      <thread-list :threads="threads" />
    </div>
</template>

<script>
import ThreadList from '@/components/ThreadList.vue'
import sourceData from '@/data.json'
export default {
  components: { ThreadList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    forum () {
      return sourceData.forums.find(forum => forum.id === this.id)
    },

    threads () {
      return sourceData.threads.filter(thread => thread.forumId === this.id)
    }
  }

}
</script>

<style>

</style>
