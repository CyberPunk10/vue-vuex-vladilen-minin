<template>
  <div id="app">
    <div class="post"
          v-for="post in allPosts" :key="post.id"
    >
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: mapGetters(['allPosts']),
  async mounted () {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 2rem auto;
  width: 400px;

  .post {
    border: 1px solid #cecece;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 3px;
  }
}
</style>
