import { createStore, createLogger } from 'vuex'

export default createStore({
  plugins: [createLogger()],
  state: {
    installPrompt: null
  },
  mutations: {
    setInstallPrompt(state, data) {
      state.installPrompt = data
    }
//state.installPrompt.userChoice.then
  },
  actions: {
  },
  getters: {
    canInstall(state) {
      return 'BeforeInstallPromptEvent' in window &&
          // eslint-disable-next-line no-undef
      state.installPrompt instanceof BeforeInstallPromptEvent
    }
  },
  modules: {
  }
})
