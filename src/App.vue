<template>
  <div id="app">
    <PostForm/>
    <p>Количество постов: {{ postsCount }}</p>
    <div class="post"
          v-for="post in validPosts" :key="post.id"
    >
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostForm from '@/components/PostForm'
export default {
  name: 'App',
  components: { PostForm },
  computed: mapGetters(['validPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  async mounted () {
    // this.$store.dispatch('fetchPosts')
    this.fetchPosts()
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
    border-radius: 4px;
  }
}
</style>
