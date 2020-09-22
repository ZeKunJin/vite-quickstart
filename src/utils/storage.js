const ls = {
  get(key) {
    return localStorage[key]
  },

  set(key, value) {
    localStorage.setItem(key, value)
  },

  remove(key) {
    localStorage.removeItem(key)
  }
}

export default ls
