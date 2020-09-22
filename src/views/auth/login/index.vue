<template>
  <div class="login-page-layout">
    <input type="text" v-model="username" /><br />
    <input type="password" v-model="password" /><br />

    <button @click="login">login</button>
  </div>
</template>

<script setup="props, context">
import { createApp, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export const router = useRouter()
export const store = useStore()
export const username = ref('')
export const password = ref('')

export const login = (e) => {
  store
    .dispatch('user/Login', {
      username: username.value,
      password: password.value
    })
    .then(() => {
      router.push({ name: 'message' })
    })
}
</script>

<style lang="less" scoped>
.login-page-layout {
  min-height: 100vh;
  max-width: 100vw;
  box-sizing: border-box;
}
</style>
