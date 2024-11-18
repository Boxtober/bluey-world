import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router); // Intégration du routeur
app.mount('#app'); // Montage de l'application dans le DOM
import './assets/main.css'
