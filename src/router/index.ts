import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import CharacterPage from '../views/CharacterPage.vue';


// Définir les routes
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/character/:id',
        name: 'CharacterPage',
        component: CharacterPage,
        props: true
    },
];

// Créer et exporter le routeur
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
