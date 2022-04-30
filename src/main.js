import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

window.addEventListener('beforeinstallprompt', (e)  => {
    e.preventDefault()
    store.commit('setInstallPrompt', e)
    console.log(e.platforms) // e.g., ["web", "android", "windows"]
    store.state.installPrompt.userChoice.
    then(choiceResult => {
        console.log(choiceResult.outcome) // either "accepted" or "dismissed"
    }).catch(err => {
        console.log(err)
    })
})
