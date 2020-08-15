export default {
  state: {
    posts: []
  },

  getters: {
    validPosts(state) {
      return state.posts.filter(p => {
        return p.title && p.body
      })
    },
    allPosts(state) {
      return state.posts
    },
    postsCount(state, getters) {
      return getters.validPosts.length
    }
  },

  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
      console.log(posts)
    },
    createdPost(state, newPost) {
      state.posts.unshift(newPost)
    }
  },

  actions: {
    async fetchPosts({commit, getters, dispatch}, limit = 3) {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
      )
      const posts = await res.json()
      commit('updatePosts', posts)
      dispatch('sayHello')
    },
    sayHello() {
      console.log('sayHello')
    }
  },

  modules: {
    
  }
}