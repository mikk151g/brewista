import { createRouter, createWebHistory } from 'vue-router';

import TheHomepage from './components/TheHomepage.vue';
import PickCoffee from './components/PickCoffee.vue';
import CoffeeRecipies from './components/CoffeeRecipies.vue';
import RecipeGuide from './components/RecipeGuide.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', redirect: '/home'
        },
        {
            path: '/home',
            component: TheHomepage
        },
        {
            path: '/pickCoffee',
            component: PickCoffee
        },
        {
            path: '/coffeeRecipies',
            component: CoffeeRecipies,
        },
        {
            path: '/:id',
            name: 'recipeDetails',
            component: RecipeGuide,
            props: true
        }
    ],
    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
});

export default router;