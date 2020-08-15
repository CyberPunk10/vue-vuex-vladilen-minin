export default {
  state: {
    posts: []
  },

  getters: {
    allPosts(state) {
      return state.posts
    }
  },
  
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
      console.log(posts)
    }
  },

  actions: {
    async fetchPosts(context) {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=4'
      )
      const posts = await res.json()
      context.commit('updatePosts', posts)
    }
  },

  modules: {
    
  }
}