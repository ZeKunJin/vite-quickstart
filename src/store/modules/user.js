import ls from '/src/utils/storage'

const state = {
  token: ls.get('token') || '',
  id: '',
  name: '',
  avatar: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  Login({ commit }, loginForm) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', 'TOKEN')
      ls.set('token', 'TOKEN')
      resolve()
    })
  },

  Logout({ commit }) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', '')
      ls.remove('token')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
