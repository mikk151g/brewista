import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const store = createStore({
    state() {
        return {
            newRecipies: [
                {
                    id: 1,
                    icon: 'aeropress',
                    title: 'AeroPress',
                    beans: '16g',
                    water: '230ml',
                    grind: 'Medium',
                    time: '1 min'
                },
                {
                    id: 2,
                    icon: 'french',
                    title: 'French Press',
                    beans: '33g',
                    water: '500ml',
                    grind: 'Coarse',
                    time: '4 min'
                },
                {
                    id: 3,
                    icon: 'kalita',
                    title: 'Kalita Wave',
                    beans: '16g',
                    water: '230ml',
                    grind: 'Medium',
                    time: '1 min'
                },
                {
                    id: 4,
                    icon: 'infusion',
                    title: 'Cold Infusion',
                    beans: '40g',
                    water: '200ml',
                    grind: 'Coarse',
                    time: '2 timer'
                },
                {
                    id: 5,
                    icon: 'chemex',
                    title: 'Chemex',
                    beans: '16g',
                    water: '230ml',
                    grind: 'Fine',
                    time: '3 min'
                },
            ],
            favorites: [],
            latestBrews: [
                {
                    id: 1,
                    icon: 'infusion',
                    title: 'Beza',
                    by: 'Impact Roasters',
                    beans: '40g',
                    water: '500ml',
                    grind: 'Coarse',
                    time: '2 timer'
                }
            ],
            coffeeTypes: [
                {
                    id: 1,
                    title: 'Calahute Alto',
                    by: 'Nordhavn Coffee',
                    description: 'Very smooth with a full and round body accompanied by notes of dried fruit and ripe banana, rounded by a mild acidity reminiscent of tart fruit.',
                    process: 'Washed',
                    roastProfile: 'Medium',
                    varieties: 'Castilo, Caturra',
                    country: 'Guatemala'
                },
                {
                    id: 2,
                    title: 'Beza',
                    by: 'Impact Roasters',
                    description: 'Strong, rich taste combined with a deep spicy, citrus and floral aroma.',
                    process: 'Sun dried',
                    roastProfile: 'Medium',
                    varieties: 'Castilo, Caturra',
                    country: 'Ethiopia'
                },
                {
                    id: 3,
                    title: 'Vista Hermosa',
                    by: 'Coffee Collective',
                    description: 'Clean and balanced coffee with an elegant acidity. Aromas of pecan nuts, nougat and orange blossom.',
                    process: 'Washed',
                    roastProfile: 'Medium',
                    varieties: 'Caturra, Pache',
                    country: 'Guatemala'
                },
                {
                    id: 4,
                    title: 'Takesi Geisha',
                    by: 'Coffee Collective',
                    description: 'Super intense and complex aroma. Clean, honey-sweet with a delicate acidity. Lychee, jasmine and bergamot.',
                    process: 'Washed',
                    roastProfile: 'Medium',
                    varieties: 'Geisha',
                    country: 'Bolivia'
                }
            ]
        };
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;