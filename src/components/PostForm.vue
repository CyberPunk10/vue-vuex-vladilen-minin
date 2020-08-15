<template lang="pug">
  form(@submit.prevent="submit")
    input(type="text" placeholder="title" v-model="title")
    input(type="text" placeholder="body" v-model="body")
    button(type="submit") Create Post
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      title: '',
      body: ''
    }
  },

  methods: {
    ...mapMutations(['createdPost']),
    submit() {
      this.createdPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      })
      this.title = this.body = ''
    }
  }
}
</script>

<style scoped lang="sass">
input 
  display: block
  width: 100%
  border: 1px solid #cecece
  border-radius: 4px
  padding: 1rem
  margin-bottom: 1rem
  box-sizing: border-box

</style>