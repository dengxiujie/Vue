import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import app from './modules/AppStore.js';
import menu from './modules/MenuStore.js';
const store = new Vuex.Store({
    modules: {
        app,
        menu,
        // 其他
    }
})
export default store

