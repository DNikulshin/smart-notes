<template>
  <div class="container">
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
    <div class="install-app">
      <button type="button" @click="onInstall">установить как приложение</button>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const installPrompt = (computed(() => {
      return store.state.installPrompt
    }))
    const canInstall = (computed (() => {
      return store.getters.installPrompt
    }))
    const onInstall = () => {
      installPrompt.value.prompt()
    }
    return {
      onInstall,
      canInstall
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
