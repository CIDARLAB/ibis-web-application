import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#FCD3DE',
                secondary: '#D64550',
                accent: '#54457F',
            },
        },
    },
})