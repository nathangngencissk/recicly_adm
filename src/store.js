import Vue from 'vue';
import Vuex from 'vuex';
import { fetchUsers } from './fetch';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
        barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
        drawer: null,
        users: []
    },
    mutations: {
        SET_BAR_IMAGE(state, payload) {
            state.barImage = payload;
        },
        SET_DRAWER(state, payload) {
            state.drawer = payload;
        },
        SET_USERS(state, { users }) {
            state.users = users;
        }
    },
    actions: {
        FETCH_USERS({ commit, dispatch }) {
            return fetchUsers()
                .then(users => {
                    return commit('SET_USERS', { users })
                });
        }
    },
});

export default store;