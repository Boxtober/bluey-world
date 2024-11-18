import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.scss';

import FontAwesomeIcon from './assets/fontawesome';





const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router); // Intégration du routeur
app.mount('#app'); // Montage de l'application dans le DOM
import './assets/main.css'
