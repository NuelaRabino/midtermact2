// main.js
import { createApp } from 'vue';
import App from './App.vue';
import 'animate.css/animate.min.css';
import store from './store/store.js'; // Ensure this path is correct

const app = createApp(App);

// Use the Vuex store in your Vue app
app.use(store);

app.mount('#app');
